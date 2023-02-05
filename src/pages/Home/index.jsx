import { Banner } from "../../components/Banner";
import { ProductSection } from "../../components/ProductSection";

const HomePage = (
	<>
		<div className="home">
			<Banner></Banner>
			<ProductSection featuredProducts={true}></ProductSection>
		</div>
	</>
);

export { HomePage };
