import React from "react";
import "../../vendor/notes.css";
// changed curly braces to parenthesis for stateless, change back when adding stateful values
const ItemList = ( props ) => (
    <div id="drag2" style={{padding:20}} draggable="true" ondragstart="drag(event)">

        <div id="box2" className="w3-card w3-round">
            <div>
                <div className="w3-white">
                    <button onClick={() => { props.onClick( props.list1, "showList1" ) }} className="w3-button w3-block w3-theme-l1 w3-left-align">
                        <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
                    <div id="Demo1" className={props.hidden1 + " w3-container"}>
                        <p>Some text..</p>

                    </div>
                    <button onClick={() => { props.onClick( props.list2, "showList2" ) }} className="w3-button w3-block w3-theme-l1 w3-left-align">
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
                    <div id="Demo2" className={props.hidden2 + " w3-container"} >
                        <p>Some other text..</p>
                    </div>
                    <button onClick={() => { props.onClick( props.list3, "showList3" ) }} className="w3-button w3-block w3-theme-l1 w3-left-align">
                        <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
                    <div id="Demo3" className={props.hidden3 + " w3-container"} >

                        <div className="w3-row-padding">

                            <div className="w3-half">
                                <img src="/w3images/lights.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/nature.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/mountains.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/forest.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/nature.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                            <div className="w3-half">
                                <img src="/w3images/snow.jpg" style={{ width: 100 }} className="w3-margin-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default ItemList;