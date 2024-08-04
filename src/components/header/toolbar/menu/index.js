import React from "react";
import MenuItem from "./menuItem";
import style from "./style.module.css"
const Menu = () => (<div>
    <ul className={style.menu}>
        <MenuItem active link="/">Нүүр</MenuItem>
        <MenuItem link="/">Хаяг холбох</MenuItem>
        <MenuItem link="/">Трак бүртгүүлэх</MenuItem>
        <MenuItem link="/login">Нэвтрэх</MenuItem>
    </ul>
</div>);

export default Menu;