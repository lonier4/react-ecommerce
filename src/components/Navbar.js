import '../CSS.css';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Clowning Around</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <i className="fa fa-shopping-cart"></i>
               <span> | {props.cart.size} - ${props.cart.total.toFixed(2)}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
export default Navbar;
