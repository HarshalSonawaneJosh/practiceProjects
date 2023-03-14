import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, editUser } from "../redux/action";

const AddUser = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstNameeHandler = (e) => {
    setFirst_Name(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLast_Name(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finaldata = {
      first_name,
      last_name,
      email,
    };
    dispatch(addUser({ finaldata }));
    navigate("/");
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Fist Name"
              onChange={(e) => firstNameeHandler(e)}
            />
            <label htmlFor="inputName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Last Name"
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
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AddUser;
