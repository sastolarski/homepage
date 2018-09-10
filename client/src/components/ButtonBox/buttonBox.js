import React from "react";

const ButtonBox =(props)=>(
    <div id="box1" class="w3-card w3-round w3-white">
    <td>Filename to Save As:</td>
    <br/>
            
    <td><input id="inputFileNameToSaveAs"></input></td>
    <td><button onClick={props.button1} >Save Text to File</button></td>
<br/>
    <td>Select a File to Load:</td>
    <br/>
    <td><input type="file" id="fileToLoad" /></td>
    <br/>
    <td><button onClick={props.button2} >Load Selected File</button></td>
    <td><p id="optionalText"></p></td>
    </div>

)
export default ButtonBox;