import React, { Component } from 'react'
import shuffle from 'lodash/shuffle'

import SocialMediaShare from './SocialMediaShare'
import { Button } from '../components/styles/StyledComponents'

class QuoteListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteOrder: [0],
      quoteRef: 0,
    }
  }

  componentDidMount() {
    this.createRandomSequence()
  }

  createRandomSequence() {
    const shuffleSequence = shuffle(
      Array.from(Array(this.props.quotes.length).keys())
    )
    this.setState({ quoteOrder: shuffleSequence })
  }

  nextQuote = () => {
    const { quoteRef, quoteOrder } = this.state

    if (quoteRef < quoteOrder.length - 1) {
      this.setState({ quoteRef: quoteRef + 1 })
    } else {
      this.setState({ quoteRef: 0 })
    }
  }

  render() {
    const { quoteOrder, quoteRef } = this.state
    const { author } = this.props.quotes[quoteOrder[quoteRef]].node
    const { quote } = this.props.quotes[quoteOrder[quoteRef]].node.quote

    return (
      <div className="text-center pt-14">
        <Button onClick={this.nextQuote} width={'auto'}>Inspire me with a new quote</Button>
        <section className="text-center h-32 my-8">
          <blockquote key={quoteRef} className="relative animate-[fadein_2s_ease]">
            <p>{quote}</p>
            <footer>{author}</footer>
          </blockquote>
          <SocialMediaShare
            content={`${quote} - ${author}`}
            link={'https://nimaiwalsh.com'}
          />
        </section>
      </div>
    )
  }
}

export default QuoteListing
