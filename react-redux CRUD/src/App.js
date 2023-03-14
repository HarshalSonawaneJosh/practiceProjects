import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser, updateUser } from "./redux/action";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Edit from "./components/edit";
import AddUser from "./components/addUser";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
