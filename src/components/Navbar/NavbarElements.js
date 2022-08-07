<<<<<<< HEAD
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../Constant";
  
export const Nav = styled.nav(props=>({
  background: props.bgcolor,
  height: '85px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10',
  zIndex:12
}));
// export const Nav = styled.nav`
//   background: #ffb3ff;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
// `;
  
export const NavLink = styled(Link)
// ({
//   color: Constant.Color.primaryColor,
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration:'none',
//   padding: '1rem',
//   height: '100%',
//   cursor: 'pointer',
//   // ":active": Constant.Color.lightBlue
//   ":active": {
//     color: Constant.Color.lightBlue
//   },
  
// })

`
  color: #023047;
  display: flex;
  font-weight: bold;
=======
// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #ffb3ff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
>>>>>>> 82de65031fc5b5020f8ee0bef0da39f57ffcc239
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
<<<<<<< HEAD
    color: #219ebc;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #023047;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
=======
    color: #4d4dff;
  }
`;
  
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
>>>>>>> 82de65031fc5b5020f8ee0bef0da39f57ffcc239
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;