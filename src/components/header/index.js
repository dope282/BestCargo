import React from "react";
import style from "./style.module.css";
import Menu from "./toolbar/menu";
import Logo from "./logo";
import NavMenu from "./navMenu";
const Header = props => (   
            <div className={style.HeaderContainer}>
                <Logo show/>
                <nav className={style.hideOnMobile}> <Menu/>  </nav>
                <NavMenu toggleSideBar={props.toggleSideBar}/>
            </div>
);
export default Header;