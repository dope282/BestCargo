import React from "react";
import style from "./style.module.css";
import InputTrackCode from "../inputTrakCode";
export const SearchTrack = () => {
    return (
        <div className={style.search}>
            <input className={style.searchTrack} placeholder="track code haih"/>
            <InputTrackCode/>
        </div>
    )
}

