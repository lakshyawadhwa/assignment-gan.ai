import "./CartProducts.scss";
import { CartState } from "../../context";
const CartProducts = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();

	const removeFromCart = (selectedProduct) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: selectedProduct });
	};
	const checkout = () => {
		console.table(cart);
	};

	return (
		<>
			<div className="cart-wrapper">
				<div className="product-wrapper">
					{cart.map((product) => {
						return (
							<div key={product.name} className="cart-product">
								<div className="card-wrapper">
									<img className="" src={product.image} alt="product" />
									<div className="card-info-wrapper">
										<p>{product.name}</p>

										<span>₹{product.price}/-</span>
										<br />
										<span>{product.description}</span>
									</div>
								</div>
								<button
									className={`button`}
									onClick={() => removeFromCart(product)}
								>
									<i className="material-icons right">delete</i>
									Remove from Cart
								</button>
							</div>
						);
					})}
				</div>
				<div className="order-summary">
					<div className="cart-product">
						<div className="card-wrapper">
							<div className="card-info-wrapper">
								<div className="row">
									<span>No. of Items:</span>
									<span>{cart?.length}</span>
								</div>

								<div className="row">
									<span>Total Price:</span>
									<span>
										₹
										{cart?.length
											? cart
													.map((product) => product.price)
													.reduce((prev, next) => prev + next)
											: 0}
										/-
									</span>
								</div>
							</div>
						</div>
						<button className={`button`} onClick={() => checkout()}>
							<i className="material-icons right">shopping_cart</i>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export { CartProducts };
