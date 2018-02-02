import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question }) => (
  <div className="column is-4">
    <div className="card" key={question.id}>
      <div className="card-content">
          <p className="title">"{question.text}"</p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button className="button is-info">Use</button>
        </div>
      </footer>
    </div>
  </div>
)

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export default Question
