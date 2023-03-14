import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData); //B
  const data = useSelector((state) => state.productData);
  console.warn("data in main component from saga", data); //8
  console.log(result, "....."); //after added data it will run.

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div>
        <button className="button-27" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </button>
      </div>
      <div>
        {/* <button onClick={() => dispatch(productList())}>
          Get Product List
        </button> */}
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.photo} alt="" style={{ width: 250 }} />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button
                className="add-to-cart"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
              {result.find((cartProduct) => cartProduct.id === item.id) && (
                <button
                  className="remove-to-cart"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
