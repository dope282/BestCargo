import React, { Component } from "react";
import TrackCodeBuilder from "./classifyTrakCode";
import style from "./style.module.css";
import { SearchTrack } from "./searchTrackCode";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export default function TrackCodeSection() {
    return (
            <div className={style.trackCodeField}>
                <SearchTrack/>
                <hr/>
                <TrackCodeBuilder/>
            </div>
)
}
    