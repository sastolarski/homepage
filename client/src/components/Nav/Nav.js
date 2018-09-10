import React from "react";

const Nav =(props)=> (
  <div className="w3-bar w3-black" style={{position:"fixed"}}>
<div>
    <span class="w3-bar-item w3-large">Welcome User</span>

    <a href="/home/name" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">home/:id</a>

    <a href="/contacts" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Contacts</a>

    <a href="/calendar" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Calendar</a>

    <a href="/news" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">News</a>

    <a href="/" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right">Home</a>

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="myFunction()">&#9776;</a>
  </div>
  </div>
);

export default Nav;
