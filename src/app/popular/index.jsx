import _ from 'lodash'
import React from 'react'

import Question from './question'
import questions from './questions.json'

const Popular = () => (
  <div>
    <section className="hero is-grey">
      <div className="hero-body">
        <div className="container has-text-centered is-9">
          <h1 className="title">Choose between one of our most popular questions...</h1>
          <br />
          <div className="columns is-multiline">
            
              {_.map(questions, (question, i) => <Question key={i} question={question} />)}
            
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default Popular
