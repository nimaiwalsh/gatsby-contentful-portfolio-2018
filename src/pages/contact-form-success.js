import React from 'react'

import Layout from '../components/Layout'
import FadeInUp from '../components/FadeInUp'

const ContactConfirm = () => {
  return (
    <Layout>
      <FadeInUp>
        <div className="w-full">
          <section className="pb-4 relative">
            <h1>Form submission successful</h1>
            <p>
              Thanks for getting in contact with me. I look forward to reading
              your response and I will be in contact shortly.
            </p>
            <p>
              Cheers, <br />
              Nimai
            </p>
          </section>
        </div>
      </FadeInUp>
    </Layout>
  )
}

export default ContactConfirm
