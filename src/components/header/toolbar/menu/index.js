import React from "react";
import MenuItem from "./menuItem";
import style from "./style.module.css"
const Menu = () => (<div>
    <ul className={style.menu}>
        <MenuItem active link="/">Track Code</MenuItem>
        <MenuItem link="/login">Nevtreh</MenuItem>
    </ul>
</div>);

export default Menu;