import React, { Component } from 'react'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <FadeInUp>
          <div>
            <h1>About me</h1>
            <p>
              I am an adaptable professional and an exceptional team player with
              a background in Military, Customer Service, IT Support and Front
              End Web Development. I live by the values Honour, Honesty,
              Courage, Integrity and Loyalty.
            </p>

            <p>
              I have developed skills in HTML, CSS, Responsive Design and
              JavaScript. I specialize in React and Redux for Front End Web
              Development. I am consistently learning and enjoy keeping up to
              date with the latest web technologies.
            </p>

            <p>
              I bring with me a positive attitude, tenacity, maturity, charisma
              and my strong-will. My curiosity sees me wanting to learn more and
              I am ready to move beyond my comfort zone. I am always asking
              questions and find all subjects and topics fascinating. I like
              exploration and discovery.
            </p>

            <p>
              I work hard to finish what I start, no matter what the project I
              get it completed in a timely manner. I do not get distracted while
              working and take satisfaction in completing tasks.
            </p>

            <p>
              I excel as a member of a team and a leader of a small group. I am
              a loyal and dedicated teammate and will always do my fair share,
              and work hard for the success of the group. I believe in fairness,
              kindness and forgiveness when working with others.
            </p>
          </div>
        </FadeInUp>
      </Layout>
    )
  }
}
