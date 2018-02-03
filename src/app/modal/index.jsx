import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const POSITIVE_ANSWER = 'Yes of course!'
const NEGATIVE_ANSWER = 'Not allowed, sorry...'

export default class Modal extends Component {
  static propTypes = {
    question: PropTypes.string,
    onClose: PropTypes.func.isRequired
  }

  static defaultProps = {
    question: null
  }
  
  state = {
    result: {},
    isLoading: true
  }

  componentWillMount() {
    let result = null
    if (Math.random() > 0.65) {
      result = { isSuccess: true, answer: POSITIVE_ANSWER }
    } else {
      result = { isSuccess: false, answer: NEGATIVE_ANSWER }
    }

    setTimeout(() => this.setState({ result, isLoading: false }), 3000)
  }

  componentWillUnmount() {
    this.setState({ result: {}, isLoading: true })
  }

  render() {
    const { question } = this.props
    const { result: { isSuccess, answer }, isLoading } = this.state
    
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <section className="modal-card-body has-text-centered ">
            <h1 className="title">{question}</h1>
            <div style={{ marginTop: '30px' }}>
              { isLoading
                ? <i className="fa-5x fas fa-spinner fa-pulse" />
                : (
                  <div className={`notification ${isSuccess ? 'is-success' : 'is-danger'}`}>
                    <i className={`fa-8x fas ${isSuccess ? 'far fa-smile' : 'far fa-frown'}`} />
                    <br />
                    <p style={{ marginTop: '20px'}} className="subtitle">{answer}</p>
                  </div>
                )
              }
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => this.props.onClose()}
            >
              Thank you! I've done
            </button>
          </footer>
        </div>
      </div>
    )
  }
}
