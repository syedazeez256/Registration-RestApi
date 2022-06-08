import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Header from "./components/layouts/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/user/add" element={<AddUser />}></Route>
          {/* <Route exact path="/user/edit/:id" element={<EditUser />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
