import { productsArray } from "../../utils/DummyData";
import { ProductCard } from "../ProductCard";
import "./ProductSection.scss";

const ProductSection = ({ featuredProducts }) => {
	return (
		<>
			{featuredProducts ? <h1>Featured Products</h1> : <h1> Products</h1>}
			<div className="product-section-wrapper">
				{productsArray.map((product) => {
					if (
						(featuredProducts && product.featuredProduct) ||
						!featuredProducts
					) {
						return (
							<ProductCard
								key={product.name}
								product={product}
								featuredProducts={featuredProducts}
							></ProductCard>
						);
					} else return <></>;
				})}
			</div>
		</>
	);
};
export { ProductSection };
