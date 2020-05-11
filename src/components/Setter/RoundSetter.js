import React from "react";
import SetterInput from "./SetterInput";

class RoundSetter extends React.Component {
    render() {
        return(
            <div className={'flex-container'}>
                <div className={'i-block'}>
                   <SetterInput val={this.props.setRounds} onValChange={this.props.roundChange}/>
                    <p>rounds</p>
                </div>
                <div className={'i-block'}>
                    <SetterInput val={this.props.setGoal} onValChange={this.props.goalChange}/>
                    <p>goal</p>
                </div>
            </div>
        )
    }

}

export default RoundSetter;