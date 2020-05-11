import React from "react";

import TimeSetter from "./components/Setter/TimeSetter";
import RoundSetter from "./components/Setter/RoundSetter";
import './components/Setter/Setter.css'

import Timer from "./components/Display/Timer";
import RoundDisplay from "./components/Display/RoundDisplay";
import './components/Display/display.css'

const initialState = {
    timeLeftS : 1500000,
    timerOn: false,
    focusLength : 25,
    shortB : 5,
    longB : 30,
    setRounds: 4,
    setGoal : 12,
    currentRound: 0,
    // currentType one of : 'study' , 'long', 'short'
    currentType: 'study',
    viewSetter: true
};

class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = initialState;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.setterOnClick=this.setterOnClick.bind(this);
        this.handleSetterOnclick=this.handleSetterOnclick.bind(this);
        this.handleFocusChange= this.handleFocusChange.bind(this);
        this.handleShortBChange = this.handleShortBChange.bind(this);
        this.handleLongBChange = this.handleLongBChange.bind(this);
        this.handleRoundChange=this.handleRoundChange.bind(this);
        this.handleGoalChange=this.handleGoalChange.bind(this);
    }

    startTimer = () => {
        this.setState({timerOn: true});
        this.timer = setInterval(()=> {
            const updateTime = this.state.timeLeftS - 1000;
            if (updateTime >= 0) {
                this.setState({
                    timeLeftS : updateTime})
            } else {
                if (this.state.currentType === 'study') {
                    if (this.state.setRounds - (this.state.currentRound % this.setRounds) === 1) {
                        this.setState({
                            timeLeftS: this.state.longB * 60000,
                            currentType: 'long'
                        })
                    } else {
                        this.setState({
                            timeLeftS: this.state.shortB * 60000,
                            currentType: 'short'
                        })
                    }
                    this.setState(prevState => ({
                        currentRound: prevState.currentRound + 1

                    }));
                    alert("Break Time")
                } else {
                    this.setState({
                        currentType:'study',
                        timeLeftS: this.state.focusLength * 60000
                    });
                    alert("Back To Work")
                }
            }
        }, 1000)
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({timerOn: false})
    };

    setterOnClick(){
        this.setState(prevState =>({
            viewSetter: !prevState.viewSetter
        }));
    }

    handleSetterOnclick(event){
        if (this.state.viewSetter){
            this.startTimer()
        } else {
            this.stopTimer()
        }
        this.setState(prevState =>({
            viewSetter: !prevState.viewSetter
        }));
    }

    handleFocusChange(time){
        this.setState({focusLength: time});
        if (this.state.currentType === 'study') {
            this.setState({timeLeftS: time * 60000})
        }
    }

    handleShortBChange(time){
        this.setState({shortB: time});
        if (this.state.currentType === 'short') {
            this.setState({timeLeftS: time * 60000})
        }
    }

    handleLongBChange(time){
        this.setState({longB: time});
        if (this.state.currentTye === 'long') {
            this.setState({timeLeftS: time * 60000})
        }
    }

    handleRoundChange(rounds){
        this.setState({setRounds: rounds})
    }

    handleGoalChange(rounds){
        this.setState({setGoal:rounds})
    }

    render() {
        let setterDisplay, buttonDisplay;

        if (!this.state.viewSetter) {
            setterDisplay = {
                display: 'none'
            }
        } else {
            buttonDisplay ={
                display: 'none',
            }
        }


        return(
            <div>
                <div id={'setter'}>
                    <button id={'setterButton'}
                            className={'toggleButton'}
                            onClick={this.handleSetterOnclick}
                            style={buttonDisplay}>
                        Settings
                    </button>
                    <div id={'display'} style={setterDisplay}>
                        <div>
                            <RoundSetter setRounds={this.state.setRounds} roundChange={this.handleRoundChange}
                                         setGoal={this.state.setGoal} goalChange={this.handleGoalChange}/>
                            <TimeSetter focusLength={this.state.focusLength} studyChange={this.handleFocusChange}
                                        shortB = {this.state.shortB} shortBChange={this.handleShortBChange}
                                        longB = {this.state.longB} longBChange={this.handleLongBChange}/>
                            <button className={'toggleButton'} onClick={this.handleSetterOnclick}>
                                Start Timer
                            </button>
                        </div>
                    </div>
                </div>
                <div id={'display'}>
                        <Timer timer = {this.state.timeLeftS}
                               start={this.startTimer} stop={this.stopTimer}
                               timerOn={this.state.timerOn}/>
                        <RoundDisplay currentRound={this.state.currentRound}
                                      setRounds = {this.state.setRounds}
                                      setGoal = {this.state.setGoal} />
                </div>
            </div>
        )
    }

}

export default Main