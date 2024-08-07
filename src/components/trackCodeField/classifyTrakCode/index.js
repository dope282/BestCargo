import React, { Component } from "react";
import TrackCodeContainer from "./trakCode";
import style from "./style.module.css"
class TrackCodeBuilder extends Component {
    render() {
        return (
            <div>
                <ul className={style.angilah}>
                    <li>Бүртгүүлсэн</li>
                    <li>Эрээнд ирсэн</li>
                    <li>Монголд ирсэн</li>
                    <li>Бараагаа авсан</li>
                </ul>
                <div>
                    <TrackCodeContainer type="test sda"/>
                    <TrackCodeContainer type="test"/>
                    <TrackCodeContainer type="test"/>
                </div>
            </div>
        )
    }
}
export default TrackCodeBuilder