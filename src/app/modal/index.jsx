import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Modal extends Component {
  static propTypes = {
    question: PropTypes.string
  }

  static defaultProps = {
    question: null
  }
  
  getRandomAnswer() {

  }

  render() {
    const { question } = this.props
    const isActive = !_.isNull(question) || !_.isEmpty(question)
    console.log(question)
    return (
      <div className={`modal ${isActive && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">So you are wondering if... {question}</p>
            <button className="delete" aria-label="close" />
          </header>
          <section className="modal-card-body">
            And the answer is...
          </section>
          <footer className="modal-card-foot">
            <button className="button">Close</button>
          </footer>
        </div>
      </div>
    )
  }
}
