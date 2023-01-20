import React, {useState} from "react";


function OnOff() {

    const [on, onSet] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '10px',
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '10px',
        backgroundColor: on ? "white" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={() => (onSet(true))}> On</div>
            <div style={offStyle} onClick={() => (onSet(false))}> Off</div>
            <div style={indicatorStyle} onClick={() => (onSet)}></div>
        </div>
    );
}

export default OnOff;