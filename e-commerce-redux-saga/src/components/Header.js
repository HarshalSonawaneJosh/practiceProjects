import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData); //by using this useSelector we are able to fetch all redux data and if we want to use particuler reducer data then use state.(reducer name) which is presents in the root reducer file.
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="logo">E-Comm</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <Link to={"/cart"}>
        <div className="cart-div">
          <span>{result.length}</span>

          <img
            src="https://e7.pngegg.com/pngimages/726/962/png-clipart-orange-shopping-cart-illustration-amazon-com-shopping-cart-online-shopping-logo-store-shelf-miscellaneous-angle.png"
            target="_blank"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
