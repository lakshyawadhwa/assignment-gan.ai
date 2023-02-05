import { images } from "../../utils/Images";
import { CartIcon } from "../CartIcon";
import { PageLinkCard } from "../PageLinkCard";
import "./Banner.scss";
const pageLinks = [
	{
		title: "Products",
		description: "Check out all of our delicious products!",
		image: images.brown_cake,
		link: "/products",
	},
	{
		title: "Cake Class",
		description: "Join our classes to become a master baker!",
		image: images.pink_cake,
		link: "/classes",
	},
	{
		title: "Recipes",
		description: "Check out some easy recipes you can try at home!",
		image: images.teal_cake,
		link: "/recipes",
	},
];
const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-background">
				<div className="cart-icon-wrapper">
					<CartIcon />
				</div>
				<div className="page-link-wrapper">
					{pageLinks.map((pageLink) => {
						return <PageLinkCard key={pageLink.link} {...pageLink} />;
					})}
				</div>
			</div>
		</div>
	);
};
export { Banner };
