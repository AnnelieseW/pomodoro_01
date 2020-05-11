import React from "react";
import SetterInput from "./SetterInput";

class TimeSetter extends React.Component {
    render() {
        return(
            <div className={'flex'}>
                <div className={'i-block'}>
                    <SetterInput val={this.props.focusLength} onValChange={this.props.studyChange}/>
                    <p>focus length (mins)</p>
                </div>
                <div className={'i-block'}>
                    <SetterInput val={this.props.shortB} onValChange={this.props.shortBChange}/>
                    <p>short break (mins)</p>
                </div>
                <div className={'i-block'}>
                    <SetterInput val={this.props.longB} onValChange ={this.props.longBChange}/>
                    <p>long break (mins)</p>
                </div>

            </div>
        )
    }
}

export default TimeSetter
