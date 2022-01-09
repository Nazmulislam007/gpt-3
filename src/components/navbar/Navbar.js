import React, { useState } from "react";
import classes from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={classes.gpt3__navbar}>
      <div className={classes.gpt3__navbar_links}>
        <div className={classes.gpt3__navbar_links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.gpt3__navbar_links_container}>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className={classes.gpt3__navbar_sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={classes.gpt3__navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
