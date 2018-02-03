import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  state = {
    question: null
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { question } = this.state

    return (
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Ask your own question</h1>
            <div className="field has-addons">
              <div className="control container">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Please write here..."
                  onChange={e => this.setState({ question: e.target.value })}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info is-large"
                  onClick={() => this.props.onClick(question)}
                  disabled={_.isNull(question) || _.isEmpty(question)}
                >
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
