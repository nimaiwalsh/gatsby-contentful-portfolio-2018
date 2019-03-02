import React from 'react'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'
import { PageWrapper, Section } from '../components/styles/StyledComponents'

const ContactConfirm = () => {
  return (
    <Layout>
      <FadeInUp>
        <PageWrapper>
          <Section>
            <h1>Form submission successful</h1>
            <p>
              Thanks for getting in contact with me. I look forward to reading
              your response and I will be in contact shortly.
            </p>
            <p>
              Cheers, <br />
              Nimai
            </p>
          </Section>
        </PageWrapper>
      </FadeInUp>
    </Layout>
  )
}

export default ContactConfirm
