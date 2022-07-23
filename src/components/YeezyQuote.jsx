
import React, { Component } from "react";

export default class YeezyQuote extends Component {
    handleClick = () => {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(quoteObj => {
                this.props.setQuote(quoteObj.quote)
            })
    }


    render() {
        return (
            <div className="at-container">
                <button className="align-center" onClick={this.handleClick}>Click here</button>
                <h2 className="ta-center">{this.props.quote}</h2>
            </div>
        )
    }
}