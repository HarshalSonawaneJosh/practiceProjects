import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="content">
      <h1 style={{ color: "blue" }}>The Dojo Blog</h1>
      <div className="links">
        <Link
          to="/"
          style={{
            color: "green",
            backgroundColor: "skyblue",
            borderRadius: "8px",
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
