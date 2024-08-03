import React from "react";
import style from "./style.module.css"

const MenuItem = (props) => (<li className={style.menuItem}>
    <a className={props.active ? style.active : null} href={props.link}>{props.children}</a>
</li>)

export default MenuItem;