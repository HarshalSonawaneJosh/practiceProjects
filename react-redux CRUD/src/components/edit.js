import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateUser } from "../redux/action";

const Edit = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.details);
  console.log(users);

  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [last_name, setLastName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = users.find((user) => user.id === parseInt(id));
  console.log(currentUser + ".....");

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.first_name);
      setEmail(currentUser.email);
      setLastName(currentUser.last_name);
    }
  }, [users]);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finaldata = {
      id,
      first_name,
      email,
      last_name,
    };
    dispatch(updateUser({ finaldata }));
    navigate("/");
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <h2>Testing</h2>
            <label htmlFor="inputName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="First Name"
              defaultValue={first_name}
              onChange={(e) => firstNameHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Last Name"
              defaultValue={last_name}
              onChange={(e) => lastNameHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              defaultValue={email}
              onChange={(e) => emailHandler(e)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default Edit;
