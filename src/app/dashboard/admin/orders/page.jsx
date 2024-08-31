"use client";
import { useEffect, useState, Suspense } from "react";
// import toast from "react-hot-toast";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/product/Pagination";
import { useSession } from "next-auth/react";

export default function AdminOrders({ searchParams }) {
	const [orders, setOrders] = useState([]);
	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(true);
	// const [user, setUser] = useState()

	const router = useRouter();
	const pathname = usePathname();
	const searchQuery = new URLSearchParams({
		page: searchParams?.page || 1,
	}).toString();
	// const page = searchParams.get("page") || 1;
	const { data } = useSession();
	const fetchOrders = async () => {
		try {
			const response = await fetch(
				`${process.env.VERCEL_URL}/admin/orders?${searchQuery}`,
				{
					method: "GET",
					next: { revalidate: 1 },
					cache: "no-cache",
				},
			);
			const data = await response.json();
			// console.log(data, "data");

			setOrders(data.orders);
			setCurrentPage(data.currentPage);
			setTotalPages(data.totalPages);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!data?.user) {
			return;
		}

		fetchOrders();
	}, [searchQuery, data?.user]);

	const handleStatusChange = async (newStatus, orderId) => {
		try {
			const response = await fetch(
				`${process.env.VERCEL_URL}/admin/orders/${orderId}`,
				{
					method: "PUT",
					body: JSON.stringify({ delivery_status: newStatus }),
					headers: {
						"Content-type": "application/json",
					},
					next: { revalidate: 1 },
				},
			);
			const data = await response.json();
			if (!response.ok) {
				// toast.error("Failed to update order status");
			} else {
				setOrders((prevOrders) =>
					prevOrders.map((o) =>
						o._id === orderId
							? { ...o, delivery_status: newStatus }
							: o,
					),
				);
				// toast.success("Order status updated");
				fetchOrders();
			}
			// setOrders(data);
		} catch (err) {
			console.log(err);
			// toast.error("Order cancellation failed. Try again.");
		}
	};

	// if (loading) {
	// 	return (
	// 		<div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
	// 			LOADING...
	// 		</div>
	// 	);
	// }

	return (
		<Suspense>
			<div className="container mb-5">
				{/* <pre>{JSON.stringify(orders, null, 4)}</pre> */}
				<div className="row">
					<div className="col">
						<h4 className="text-center">Recent Orders</h4>

						{orders?.length > 0 &&
							orders?.map((order) => (
								<div
									key={order._id}
									className="mb-4 p-4 alert alert-secondary"
								>
									<table className="table table-striped">
										<tbody>
											<tr>
												<th scope="row">
													Customer Name:
												</th>
												<td>{order?.userId?.name}</td>
											</tr>

											<tr>
												<th scope="row">Charge ID:</th>
												<td>{order?.chargeId}</td>
											</tr>

											<tr>
												<th scope="row">Created:</th>
												<td>
													{new Date(
														order?.createdAt,
													).toLocaleDateString()}
												</td>
											</tr>

											<tr>
												<th scope="row">
													Payment Intent:
												</th>
												<td>{order?.payment_intent}</td>
											</tr>

											<tr>
												<th scope="row">User Email:</th>
												<td>{order?.userId?.email}</td>
											</tr>

											<tr>
												<th scope="row">Refunded:</th>
												<td>
													{order?.refunded
														? "Yes"
														: "No"}
												</td>
											</tr>

											<tr>
												<th scope="row">Status:</th>
												<td>{order?.status}</td>
											</tr>

											<tr>
												<th scope="row">
													Total Charged:
												</th>
												<td>
													$
													{(order?.amount
														? order?.amount / 100
														: order?.amount_received /
														  100
													)?.toFixed(2)}{" "}
													{order?.currency}
												</td>
											</tr>

											<tr>
												<th scope="row">
													Shopping Address:
												</th>
												<td>
													{
														order?.shipping?.address
															?.line1
													}
													<br />
													{order?.shipping?.address
														?.line2 &&
														order?.shipping?.address
															?.line}
													{
														order?.shipping?.address
															?.city
													}
													,
													{
														order?.shipping?.address
															?.state
													}
													,
													{
														order?.shipping?.address
															?.postal_code
													}
													,
													<br />
													{
														order?.shipping?.address
															?.country
													}
												</td>
											</tr>

											<tr>
												<th
													scope="row"
													className="w-25"
												>
													Ordered Products:
												</th>
												<td className="w--75">
													{order?.cartItems?.map(
														(product) => (
															<div
																className="pointer text-primary"
																key={
																	product?._id
																}
																// onClick={() =>
																// 	router.push(
																// 		`/product/${product?.slug}`,
																// 	)
																// }
															>
																{
																	product?.quantity
																}{" "}
																x{" "}
																{product?.title}{" "}
																$
																{product?.price?.toFixed(
																	2,
																)}{" "}
																{
																	order?.currency
																}
															</div>
														),
													)}
												</td>
											</tr>

											<tr>
												<th scope="row">
													Delivery Status
												</th>
												<td>
													<select
														className="form-control"
														onChange={(e) =>
															handleStatusChange(
																e.target.value,
																order?._id,
															)
														}
														value={
															order?.delivery_status
														}
														disabled={
															order?.refunded
														}
													>
														<option value="Not Processed">
															Not Processed
														</option>
														<option value="Processing">
															Processing
														</option>
														<option value="Dispatched">
															Dispatched
														</option>
														{order?.refunded && (
															<option value="Cancelled">
																Cancelled
															</option>
														)}
														<option value="Devilered">
															Devilered
														</option>
													</select>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							))}
					</div>
				</div>

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					pathname={pathname}
				/>
			</div>
		</Suspense>
	);
}
