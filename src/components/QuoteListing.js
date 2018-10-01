import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

class QuoteListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteRef: 0
    }
  }

  randomQuote = (quotes) => {
    let random = Math.floor(Math.random() * (quotes.length))
    this.setState({ quoteRef: random })
  } 

  render() {
    return (
      <StaticQuery
        query={graphql`
          query Quotes {
            allContentfulQuotes {
              edges {
                node {
                  quote {
                    quote
                  }
                  author
                }
              }
            }
          }
        `}
        render={data => {
          let { quoteRef } = this.state
          let { author } = data.allContentfulQuotes.edges[quoteRef].node
          let { quote } = data.allContentfulQuotes.edges[quoteRef].node.quote
          return (
            <section>
              <div onClick={() => this.randomQuote(data.allContentfulQuotes.edges)}>RANDOM</div>
              <div>
                <span>{ author }</span>
                <span>{ quote }</span>
              </div>
            </section>
          )
        }}
      />
    )
  }
}


export default QuoteListing
