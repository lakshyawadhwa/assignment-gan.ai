import "./ProductCard.scss";
import { CartState } from "../../context";
const ProductCard = ({ product, featuredProducts }) => {
	const {
		state: { cart },
		dispatch,
	} = CartState();
	const addToCart = (selectedProduct) => {
		dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
	};
	const removeFromCart = (selectedProduct) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: selectedProduct });
	};
	return (
		<div className="product-card">
			<img className="" src={product.image} alt="product" />
			<div className="card-header">
				<span>{product.name}</span>
			</div>
			<div className="card-content">
				<p>₹{product.price}/-</p>
				{!featuredProducts ? <p>{product.description}</p> : <></>}
				{!cart.some((cartProduct) => cartProduct.name === product.name) ? (
					<button
						className={`button is-centered ${
							product.inStock ? "" : "disabled"
						}`}
						onClick={() => addToCart(product)}
					>
						<i className="material-icons right">add</i>
						{product.inStock ? "Add to cart" : "Out of stock"}
					</button>
				) : (
					<button
						className={`button remove-button`}
						onClick={() => removeFromCart(product)}
					>
						<i className="material-icons right">delete</i>
						Remove from Cart
					</button>
				)}
			</div>
		</div>
	);
};
export { ProductCard };
