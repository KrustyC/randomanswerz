import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Popular from './popular'
import Form from './form'
import Footer from './footer'

const Main = ({ onClick }) => (
  <div>
    <Header />
    <Popular onUse={onClick} />
    <Form onClick={onClick}/>
    <Footer />
  </div>
)

Main.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Main
