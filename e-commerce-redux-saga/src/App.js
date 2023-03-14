import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
