import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { removeFromCart } from "../redux/action";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.warn(amount);
  return (
    <div>
      <div className="product-list">
        <Link to={"/"}>Go to Product List</Link>
      </div>
      <h1>Cart page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Delete</td>
          </tr>

          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="remove-to-cart"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove To Cart
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>0000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
