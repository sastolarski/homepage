import React from "react";
import Card from "../Card";
const Col3 = (props)=>(
    <div class="w3-col m3" style={{padding:20}}> 
    <br></br>
    {props.childComponent1}
    {props.childComponent2}
    {props.childComponent3}
    {props.childComponent4}
    {props.childComponent5}
    {props.childComponent6}

    </div>

)

export default Col3;