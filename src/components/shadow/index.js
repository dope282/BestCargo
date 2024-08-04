import React from "react";
import style from "./style.module.css"
const Shadow = (props) => {
    return props.show ? (
    <div onClick={props.onClick} className={style.shadow}></div>
) : null
}

export default Shadow