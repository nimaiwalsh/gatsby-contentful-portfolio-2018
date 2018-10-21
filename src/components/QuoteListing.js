import React, { Component } from 'react'
import shuffle from 'lodash/shuffle'
import {
  Container,
  QuoteContainer,
  Button,
  BlockQuote,
  Quote,
  Author,
} from './QuoteListing-styles'
import SocialMediaShare from './SocialMediaShare'
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

  //A shuffled array sequence to randomise display of Quotes
  //on each page refresh
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
      <Container>
        <Button onClick={this.nextQuote}>New Quote</Button>
        <QuoteContainer>
          <BlockQuote>
            <Quote>{quote}</Quote>
            <Author>{author}</Author>
          </BlockQuote>
          <SocialMediaShare
            content={`${quote} - ${author}`}
            link={'https://nimaiwalsh.com'}
          />
        </QuoteContainer>
      </Container>
    )
  }
}

export default QuoteListing
