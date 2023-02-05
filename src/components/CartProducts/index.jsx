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
  const reduceQuantity = (selectedProduct) => {
    dispatch({ type: "REDUCE_FROM_CART", payload: selectedProduct });
  };
  const addToCart = (selectedProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
  };
  const checkout = () => {
    console.table(cart);
  };

  return (
    <>
      <div className="cart-wrapper">
        <div className="product-wrapper">
          {cart?.length ? (
            cart.map((product) => {
              return (
                <div key={product.name} className="cart-product">
                  <div className="card-wrapper">
                    <div>
                      <img className="" src={product.image} alt="product" />
                      <div class="qty-container">
                        <button
                          class="qty-btn-minus btn-light"
                          type="button"
                          onClick={() => reduceQuantity(product)}
                        >
                          <i className="material-icons">remove</i>
                        </button>
                        <input
                          type="text"
                          name="qty"
                          value={product.quantity}
                          class="input-qty"
                        />
                        <button
                          class="qty-btn-plus btn-light"
                          type="button"
                          onClick={() => addToCart(product)}
                        >
                          <i className="material-icons">add</i>
                        </button>
                      </div>
                    </div>
                    <div className="card-info-wrapper">
                      <p>{product.name}</p>

                      <span>₹{product.price}/-</span>
                      <br />
                      <span>{product.description}</span>
                    </div>
                  </div>
                  <button
                    className={`remove-from-cart button`}
                    onClick={() => removeFromCart(product)}
                  >
                    <i className="material-icons right">delete</i>
                    Remove from Cart
                  </button>
                </div>
              );
            })
          ) : (
            <h1>No products added! :(</h1>
          )}
        </div>
        <div className="order-summary">
          <div className="cart-product">
            <div className="card-wrapper">
              <div className="card-info-wrapper">
                <div className="row">
                  <span>No. of Items:</span>
                  <span>
                    {cart?.length
                      ? cart
                          .map((product) => product.quantity)
                          .reduce((prev, next) => prev + next)
                      : 0}
                  </span>
                </div>

                <div className="row">
                  <span>Total Price:</span>
                  <span>
                    ₹
                    {cart?.length
                      ? cart
                          .map((product) => product.price * product.quantity)
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
