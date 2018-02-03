import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question, onUse }) => (
  <div className="column is-4">
    <div className="card">
      <div className="card-content">
          <p className="title">"{question.text}"</p>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button className="button is-info" onClick={() => onUse(question.text)}>Use</button>
        </div>
      </footer>
    </div>
  </div>
)

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onUse: PropTypes.func.isRequired
}

export default Question
