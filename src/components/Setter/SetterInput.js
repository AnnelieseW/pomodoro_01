import React from 'react'

class SetterInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            val: this.props.val
        };
    }

    handleChange(e) {
        this.props.onValChange(e.target.value);
    }


    render() {
        const val = this.props.val;
        return (
            <input className={'setterInput'} type='number' min="0" value={val} onChange={this.handleChange}/>
        )
    }
}

export default SetterInput;
