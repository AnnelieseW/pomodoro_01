import React from "react";

class Timer extends React.Component{
    render() {
        const timeLeft = this.props.timer;

        let seconds = ("0" + (Math.floor((timeLeft/ 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timeLeft/ 60000) % 60)).slice(-2);
        let hours = (Math.floor((timeLeft/3600000)% 60));

        let timerButton;
        if (this.props.timerOn){
            timerButton =  <button onClick={this.props.stop}>stop</button>
        } else {
            timerButton= <button onClick={this.props.start}>start</button>
        }
        return(
            <div id="timer">
                <div id="timeLeft">
                    <h1>{hours !== 0? hours +":" : ""} {minutes} : {seconds}</h1>
                </div>
                {timerButton}
            </div>
        )
    }
}

export default Timer