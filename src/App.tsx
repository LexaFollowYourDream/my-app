import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";


function App() {
    console.log("App rendered")
    return (
        <div>
            <PageTitle title={"This is APP component "}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating />
            <OnOff/>
            <SelfControlledAccordion titleValue={"Menu"} />
            <SelfControlledAccordion titleValue={"Menu"} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}

export default App;