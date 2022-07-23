import React, { Component } from 'react'
import YeezyQuote from './../components/YeezyQuote'
import Note from '../components/Note'
import quotes from '../quotes'

export default class About extends Component {
    state = {
        quote: '',
        imageUrl: ''
    }

    setQuote = (newQuote) => {
        this.setState({
            quote: newQuote
        })
    }

    componentDidMount() {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(quoteObj => {
                this.setState({
                    quote: quoteObj.quote
                })
            })
    }

    handleClick = () => {
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then(quoteObj => {
                this.props.setQuote(quoteObj.quote)
            })
    }

    render() {
        return (

            <div>
                <div className="note-item">
                    {quotes.map((noteItem) =>
                        <Note
                            content={noteItem.content}
                        />
                    )}
                </div>
                <h1 className='ta-center'>Yeezy says:</h1>
                <YeezyQuote quote={this.state.quote} setQuote={this.setQuote} />
            </div>
        )
    }

}