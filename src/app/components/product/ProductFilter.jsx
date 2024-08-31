"use client";
import { useEffect, useState } from "react";
import { priceRanges } from "@/utils/filterData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import Stars from "@/components/product/Stars";

export default function ProductFilter({ searchParams }) {
	const [categories, setCategories] = useState([]);
	const pathname = "/shop";
	const { minPrice, maxPrice, category } = searchParams;
	const regSearchParams = useSearchParams();
	console.log(regSearchParams, "reg");
	const getCategories = () => {
		fetch(`https://${process.env.VERCEL_URL}/api/category`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setCategories(data);
			});
	};

	useEffect(() => {
		getCategories();
	}, []);

	const router = useRouter();
	console.log(router);

	const activeButton = "btn btn-primary btn-raised mx-1 rounded-pill";
	const button = "btn btn-raised mx-1 rounded-pill";

	const handleRemoveFilter = (filterName) => {
		const updatedSearchParams = { ...searchParams };
		// delete updatedSearchParams[filterName];

		// if filterName is string
		if (typeof filterName === "string") {
			delete updatedSearchParams[filterName];
		}
		// if filterName is array
		if (Array.isArray(filterName)) {
			filterName?.forEach((name) => {
				delete updatedSearchParams[name];
			});
		}

		// reset page to 1 when applying new filtering options
		updatedSearchParams.page = 1;

		const queryString = new URLSearchParams(updatedSearchParams).toString();
		const newUrl = `${pathname}?${queryString}`;
		router.push(newUrl);
	};

	const createQueryString = (name, value) => {
		let params = new URLSearchParams(searchParams);

		if (Array.isArray(name) && Array.isArray(value)) {
			console.log(name, value, "val");
			name.forEach((n, index) => {
				console.log(n, "lw");

				params.set(n, value[index]);
			});
			params.set("page", 1);

			return params.toString();
		}

		if (typeof name === "string") {
			params.set(name, value);
			params.set("page", 1);
			return params.toString();
		}
	};

	return (
		<div className="mb-5 overflow-scroll">
			<p className="lead">Filter Products</p>

			<Link className="text-danger" href="/shop">
				Clear Filters
			</Link>

			<p className="mt-4 alert alert-primary">Price</p>
			<div className="row d-flex align-items-center mx-1">
				{priceRanges?.map((range) => {
					const isActive =
						minPrice === String(range?.min) &&
						maxPrice === String(range?.max);
					return (
						<div key={range?.label}>
							<button
								// href={url}
								className={isActive ? activeButton : button}
								onClick={() => {
									console.log(
										createQueryString(
											["minPrice, maxPrice"],
											[range?.min, range?.max],
										),
									);
									router.push(
										`${pathname}?${createQueryString(
											["minPrice", "maxPrice"],
											[range?.min, range?.max],
										)}`,
									);
								}}
							>
								{range?.label}
							</button>
							{isActive && (
								<span
									onClick={() =>
										handleRemoveFilter([
											"minPrice",
											"maxPrice",
										])
									}
									className="pointer"
								>
									X
								</span>
							)}
						</div>
					);
				})}
			</div>

			<p className="mt-4 alert alert-primary">Categories</p>
			<div className="row d-flex align-items-center mx-1 filter-scroll">
				{categories?.map((c) => {
					const isActive = category === c._id;

					return (
						<div key={c._id}>
							<button
								// href={url}
								className={isActive ? activeButton : button}
								onClick={() => {
									router.push(
										`${pathname}?${createQueryString(
											"category",
											c._id,
										)}`,
									);
								}}
								// onClick={() =>
								// 	handleParamChange({
								// 		filterName: "category",
								// 		filterValue: c._id,
								// 	})
								// }
							>
								{c?.title}
							</button>
							{isActive && (
								<span
									onClick={() =>
										handleRemoveFilter("category")
									}
									className="pointer"
								>
									X
								</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
