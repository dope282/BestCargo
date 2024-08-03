import React from "react";
import style from "./style.module.css"
import { InputID } from "./inputId";
import { useState } from "react";
export default function InputTrackCode () {
    const [showMore, setShowMore] = useState(false);
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return (
        <div className={style.input}>
            <button className={style.trackCodeBtn} onClick={handleMoreClick}>
            Трак код бүртгүүлэх
            </button>
            {showMore && <div>
                <InputID/>
                <div>Track burtguuleh</div>
                <div>Track code</div>
            </div>}
        </div>
    )
}