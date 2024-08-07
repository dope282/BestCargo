import React from "react";
import MenuItem from "./menuItem";
import style from "./style.module.css";
export default function Menu() {
    return (
            <div>
                <ul className={style.menu}>
                    <MenuItem link="/Home">Нүүр</MenuItem>
                    <MenuItem link="/Hayg">Хаяг холбох</MenuItem>
                    <MenuItem link="/Track">Трак бүртгүүлэх</MenuItem>
                    <MenuItem exact link="/Login">Нэвтрэх</MenuItem>
                </ul>
            </div>
);
}
