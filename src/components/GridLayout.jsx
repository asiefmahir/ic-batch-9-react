import ProductCard from "./ProductCard";

const GridLayout = async () => {
	console.log("I am shop page");
	const res = await fetch(`http://localhost:4000/products`, {
		next: { tags: ["products"] },
	});
	const products = await res.json();
	return (
		<div className="grid three">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default GridLayout;
