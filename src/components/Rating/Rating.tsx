import React, {useState} from "react";


export function Rating() {
    console.log("Rating rendered")

    let [value, SetValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => SetValue(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => SetValue(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => SetValue(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => SetValue(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => SetValue(5)}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    if (props.selected === true) {
        return (<span><b> star - </b></span>);
    } else {
        return (<span>star - </span>);
    }
}