import React, { useState } from "react";
//Adding animations
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.jpg";
//redux and routes
import {fetchSearch} from "../actions/gameActions";
import {useDispatch} from "react-redux";
import {fadeIn} from "../animation";
import {Link} from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(" ");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput(""); //Deletes everything in the search bar
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  const navigateToUserPage = () =>{
    
  }
  return (
    <Stylednav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo}></img>
        <h1>Fire Link</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
        <div>
            <Link to="/User">
                <button onClick={navigateToUserPage}>Sign up/Log in/Log out</button>
            </Link>
        </div>
      </form>
    </Stylednav>
  );
};

//Forms by default caused the page to refresh and be unresponsive

const Stylednav = styled(motion.nav)`
  padding: 1.3rem 5rem;
  text-align: center;
  position: relative;
  top: 1.4rem;
  input {
    width: 30%;
    border: none;
    padding: 0.35rem;
    margin-top: 0.2rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    &:focus {
      outline-color: #ff7676;
    }
    //Breakpoints
    @media (max-width: 768px) {
      width: 60%;
      display: block;
      position: relative;
      left: 20%;
    }
  }
  button {
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    background: #ff7676;
    color: white;
    padding: 0.5rem 1.6rem;
    border-radius: 5px;
    //Breakpoints
    @media (max-width: 768px) {
      margin-top: 5px;
      font-size: 1.1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;