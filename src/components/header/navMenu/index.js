import React from "react";
import style from "./style.module.css"

const NavMenu = props => (
<div onClick={props.toggleSideBar} className={style.navMenu}>
    <div className={style.first}></div>
    <div className={style.second}></div>
    <div className={style.third}></div>
</div>
)

export default NavMenu;