import {
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    this.setState({
      isLoggedIn: false,
    });
  };

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const guestLinks = (
      <>
        <Link to="/login" className="nav-link text-black" onClick={this.login}>
          <FontAwesomeIcon icon={faSignInAlt} /> Đăng nhập
        </Link>
      </>
    );

    const userLinks = (
      <>
        <Link
          to="/logout"
          className="nav-link text-black"
          onClick={this.logout}
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
        </Link>
      </>
    );

    return (
      <Navbar bg="light" variant="dark">
        <Link to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            height="20%"
            width="20%"
            alt="Logo"
            className="ms-4"
          />
        </Link>
        <>
          <Nav className="ms-auto">
            {this.state.isLoggedIn ? userLinks : guestLinks}
            <Link to="/cart" className="nav-link text-black">
              <FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng
            </Link>
          </Nav>
        </>
      </Navbar>
    );
  }
}

export default NavBar;
