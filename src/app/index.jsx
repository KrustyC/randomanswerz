import React, { Component } from 'react'

import Header from './header'
import Popular from './popular'
import Form from './form'
import Modal from './modal'

export default class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      question: null
    }
  }

  render () {
    const { question } = this.state
    console.log(question)
    return (
      <div>
        <Header />
        <Popular />
        <Form onClick={q => this.setState({ question: q })}/>
        <Modal
          question={question}
        />
      </div>
    )
  }
}

