import React from "react";
import {manType} from "./06-destructuring-assignment.test";

type propsType = {
    title: string
    man: manType
    skills: Array<string>
    car: {model: string}
}
export const ManComponent: React.FC<propsType> = (props) => {
   const {title, man,...restProps} = props
    // const {title} = props;
    // const {name} = props.man
    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>
                {props.man}
                {restProps.car}
                {restProps.skills}
            </div>

        </div>
    )
}