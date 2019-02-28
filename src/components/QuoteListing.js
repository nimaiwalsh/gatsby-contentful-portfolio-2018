import React, { Component } from 'react'
import shuffle from 'lodash/shuffle'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

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

  // A shuffled array sequence to randomise display of Quotes
  // on each page refresh
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
          <BlockQuote key={quoteRef}>
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

/* STYLES */

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

export const Container = styled.div`
  text-align: center;
  height: auto;
`
export const Button = styled.button`
  text-align: center;
`

export const QuoteContainer = styled.section`
  text-align: center;
  height: auto;
  height: 8rem;
  margin: 2rem 0;
`

export const BlockQuote = styled.blockquote`
  position: relative;
  animation: ${fadeIn} 2s;
`

export const Quote = styled.p`
`

export const Author = styled.footer`
`
