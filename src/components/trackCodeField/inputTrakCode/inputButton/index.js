import React, { useState }from "react";
export const InputBtn = props => {
    const [idHistory, setIdHistory] = useState([])

    const clickHandler = () => {
        setIdHistory([...idHistory, props.id])
    }
    return (
        <div>
            <input 
            className="inputbtn"
            type="button"
            onClick={clickHandler}
            value={props.text ? props.text : "click me"}
            /> 
            <div>
                {idHistory.map((el, index) => (
                    <div key={index}>{el}</div>
                ))}
            </div>
        </div>
    ) 
}