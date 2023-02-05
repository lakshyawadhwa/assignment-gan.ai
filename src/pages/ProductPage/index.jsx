import { Banner } from "../../components/Banner";
import { ProductSection } from "../../components/ProductSection";

const ProductPage = (
	<>
		<div className="">
			<Banner></Banner>
			<ProductSection featuredProducts={false}></ProductSection>
		</div>
	</>
);

export { ProductPage };
