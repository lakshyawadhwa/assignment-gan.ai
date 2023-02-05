import { Link } from "react-router-dom";
import "./PageLinkCard.scss";
const PageLinkCard = (pageLink) => {
	return (
		<Link to={pageLink.link}>
			<div className="page-link-card">
				<img src={pageLink.image} alt="page" />
				<div className="link-name">
					<span className="title">{pageLink.title}</span>
					<span className="description">{pageLink.description}</span>
				</div>
			</div>
		</Link>
	);
};
export { PageLinkCard };
