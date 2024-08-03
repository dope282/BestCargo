import React, { Component } from "react";
import style from "./style.module.css";
import Toolbar from "./toolbar";
import Logo from "./logo";
import NavMenu from "./navMenu";
const Header = props => (   
            <div className={style.HeaderContainer}>
                <Logo show/>
                <nav className={style.hideOnMobile}> <Toolbar/>  </nav>
                <NavMenu toggleSideBar={props.toggleSideBar}/>
            </div>
);
export default Header;