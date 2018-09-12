import React from "react";
import {userName} from "../../pages/Calendar/Calendar";

const Nav =(props)=> (
  <div className="w3-bar w3-black" style={{position:"fixed"}}>
<div>
    <span style = {{position:"absolute", left:15+"%"}} class="w3-bar-item w3-large">Welcome {userName._currentValue.username}</span>
<div  style={{position:"relative", right:15+"%"}}>
    <a href="/home/name" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">home/:id</a>

    <a href="/contacts" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Contacts</a>

    <a href="/calendar" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Calendar</a>

    <a href="/news" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">News</a>

    <a href="/" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Home</a>

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="myFunction()">&#9776;</a>
  </div></div>
  </div>
);

export default Nav;
