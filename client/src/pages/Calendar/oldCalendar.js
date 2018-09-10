
                
                
                <div style={{ textAlign: "center" }}>
                <button onClick={this.prevMonth} style={{ position: "relative", bottom: "10px", right: "10px" }} className="fa fa-chevron-circle-left" ></button>
                <span style={{ fontSize: 45 }} >{moment( this.state.thisMonth ).format( "MMMM" )}</span>
                <button onClick={this.nextMonth} style={{ position: "relative", bottom: "10px", left: "10px" }} className="fa fa-chevron-circle-right"></button>
            </div>
            <div className="container">


                <div style = {{textAlign:"center"}}>
                <button onClick = {this.prevMonth} style={{position:"relative", bottom: "10px", right: "10px"}} className = "fa fa-chevron-circle-left" ></button>
                <span style={{fontSize: 45}} >{moment( this.state.thisMonth ).format( "MMMM" )}</span>
                <button onClick = {this.nextMonth} style={{position:"relative", bottom: "10px", left: "10px"}} className = "fa fa-chevron-circle-right"></button> 
                </div>
                <div className="container">
       
                    <script src="https://cdn.jsdelivr.net/momentjs/2.15.0/moment.min.js"></script>
                    {this.state.weekDayCalendar.map( function ( day ) {
                        return ( <div className="day">
                            {day}
                        </div> )
                    } )}

                    {this.emptyMaker()}
                    {this.mapcal}
                    {this.state.days.map( function ( day ) {
                        return (
                            <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                            {day}
                                {/* {moment( day ).format( 'D' ).toString()} */}
                                <textarea id={day}  className="scroll" style={{ alighn: "right", margin: 0, width: "fit-content", border: 0, height: 95 + "%" }} type="text" name="name" />
                            </div>
                        )
                    } )}

                </div>
            </div>
        )
    };
}







render() {

    return (
        <div>
            <div style = {{textAlign:"center"}}>
            <button onClick = {this.prevMonth} style={{position:"relative", bottom: "10px", right: "10px"}} className = "fa fa-chevron-circle-left" ></button>
            <span style={{fontSize: 45}} >{moment( this.state.thisMonth ).format( "MMMM" )}</span>
            <button onClick = {this.nextMonth} style={{position:"relative", bottom: "10px", left: "10px"}} className = "fa fa-chevron-circle-right"></button> 
            </div>
            <div className="container">
   
                <script src="https://cdn.jsdelivr.net/momentjs/2.15.0/moment.min.js"></script>
                {this.state.weekDayCalendar.map( function ( day ) {
                    return ( <div className="day">
                        {day}
                    </div> )
                } )}

                {this.emptyMaker()}


                {this.state.days.map( function ( day ) {
                    return (
                        <div style={{ color: "#034f84", fontWeight: "bold" }} className="calendarDay">
                        {day}
                            {/* {moment( day ).format( 'D' ).toString()} */}
                            <textarea id={day}  className="scroll" style={{ alighn: "right", margin: 0, width: "fit-content", border: 0, height: 95 + "%" }} type="text" name="name" />
                        </div>
                    )
                } )}

            </div>
        </div>
    )
};
}