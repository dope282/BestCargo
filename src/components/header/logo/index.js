import React from "react";
import style from "./style.module.css"
import LogoImg from "../../../assets/images/cargo.logo.png"
const Logo = props => {
    return (
        props.show ?
            <div className={style.logo}>
                <img src={LogoImg}/>
                <div className={style.hideOnMobile}>Best Cargo</div>
            </div> : 
            <div className={style.logo}>
                <img src={LogoImg}/>
            </div>
    )
};

export default Logo;