import React, { Component } from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import FormContainer from '../pages-styles/contact.styles'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

/*Encode data into a useful URL*/
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  /*Netlify  parameters in here that are picked up by the bots for form submission*/
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(err => alert(err))
  }

  // data-netlify-honeypot="bot-field"

  render() {
    const { name, email, message } = this.state
    return (
      <Layout>
        <FadeInUp>
          <section>
            <h1>Contact me</h1>
            <FormContainer>
              <form
                name="contact"
                method="post"
                action="/contact-form-success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <label hidden>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>

                <label>Name (optional)</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  className="input-name"
                />
                <label>Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  className="input-email"
                />
                <label>Message</label>
                <textarea
                  required
                  name="message"
                  type="text"
                  value={message}
                  onChange={this.handleChange}
                  className="input-message"
                />
                <Recaptcha
                  // eslint-disable-next-line react/no-string-refs
                  ref="recaptcha"
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />
                <button type="submit" className="button-submit">
                  Submit
                </button>
              </form>
            </FormContainer>
          </section>
        </FadeInUp>
      </Layout>
    )
  }
}
