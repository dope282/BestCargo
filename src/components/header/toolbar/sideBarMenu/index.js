import React from "react";
import style from "./style.module.css"
import Logo from "../../logo";
import Menu from "../menu";
import Shadow from "../../../shadow";
const SideBar = props => {

    let classes = [style.sideBar, style.Close]

    if(props.showSideBar){
        classes = [style.sideBar, style.Open]
    }

    return (
    <div>
        <Shadow show={props.showSideBar} onClick={props.toggleSideBar}/>
        <div onClick={props.toggleSideBar} className={ classes.join(" ")}>
            <div className={style.logo}>
                <Logo show/>
            </div>
            <Menu/>
        </div>
    </div>
    )
}
export default SideBar;