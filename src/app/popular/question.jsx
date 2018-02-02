import React from 'react'
import PropTypes from 'prop-types'

const Question = ({ question }) => (
  <div className="card column is-3 box" key={question.id}>
    <div className="card-content">
        <p className="title">"{question.text}"</p>
    </div>
    <footer className="card-footer">
      <div className="card-footer-item">
        <button className="button is-info">Ask</button>
      </div>
    </footer>
  </div>
)

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export default Question
