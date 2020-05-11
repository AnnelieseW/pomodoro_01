import React from "react";

class RoundDisplay extends React.Component{
    render(){
        const totalRounds = this.props.currentRound;
        const setRounds = this.props.setRounds;

        let currentRound =(totalRounds % setRounds);
        return(
            <div className={'flex-container'}>
                <div className={'i-block'}>
                    <h2> {currentRound} / {setRounds} </h2>
                </div>
                <div className={'i-block'}>
                    <h2> {totalRounds} / {this.props.setGoal} </h2>
                </div>
            </div>
        )
    }
}

export default RoundDisplay;