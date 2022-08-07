import React from "react";
<<<<<<< HEAD
import { Constant } from "../Constant";
=======
>>>>>>> 82de65031fc5b5020f8ee0bef0da39f57ffcc239
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
<<<<<<< HEAD
      <Nav bgcolor={Constant.Color.secondaryColor}>
=======
      <Nav>
>>>>>>> 82de65031fc5b5020f8ee0bef0da39f57ffcc239
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/videos" activeStyle>
            Videos
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;