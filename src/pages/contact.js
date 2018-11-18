import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>
      I'm an autodidact developer with 4 years of experience, coming from
      Piraeus, Greece, currently living in Hamburg, Germany
    </h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
