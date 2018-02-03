import React, { Component } from 'react'

import Main from './main'
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
    const isModalActive = !_.isNull(question) || !_.isEmpty(question)

    return (
      <div>
        <Main onClick={q => this.setState({ question: q })} />
        { isModalActive && (
          <Modal question={question} onClose={() => this.setState({ question: null })}/>
        )}
      </div>
    )
  }
}

