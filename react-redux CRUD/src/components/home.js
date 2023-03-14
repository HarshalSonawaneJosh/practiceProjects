import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, editUser, removeUser } from "../redux/action";
import Edit from "./edit";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log("fcghhg", data);
  if (data.isLoading) {
    return <h1>Loading...</h1>;
  }
  let users = data.details;

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const result = users?.map((user) => (
    <tr key={user.id}>
      {/* <h2>{user.first_name}</h2> */}
      <th scope="row">{user.id}</th>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <img src={user.avatar} alt="" />
      <td>
        <Link to={`edit/${user.id}`}>
          <span className="material-symbols-outlined">Edit</span>
        </Link>
      </td>
      <td>
        <span
          className="material-symbols-outlined"
          onClick={() => handleDelete(user.id)}
        >
          <span className="delete-user">delete</span>
        </span>
      </td>
    </tr>
  ));

  return (
    <div>
      <button className="add-user">
        <Link to={`/form`}>Add User</Link>
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;
