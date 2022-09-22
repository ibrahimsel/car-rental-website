import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ViewCars from "./pages/ViewCars/ViewCars";
import AddCar from "./pages/AddCar/AddCar";
import Profile from "./pages/Profile/Profile";
import * as ReactDOM from "react-dom/client";

const container: Element | DocumentFragment =
  document.getElementById("root") || document.createDocumentFragment();
  
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/viewcars" element={<ViewCars />} />
      <Route path="/addcar" element={<AddCar />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
