import { Link } from "react-router-dom";
import { CartState } from "../../context";
import "./CartIcon.scss";
const CartIcon = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();

	return (
		<Link to="/cart" className="cart">
			<span className="count">{cart?.length}</span>
			<i className="material-icons">shopping_cart</i>
		</Link>
	);
};
export { CartIcon };
