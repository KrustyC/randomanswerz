import React from 'react'

const Footer = () => (
  <section className="hero is-small is-dark">
    <div className="hero-body has-text-centered">
      <div className="container">
      <p>
      <i className="fas fa-code" />{' '}The source code is licensed{` `}
        <a
          className="has-text-primary"
          target="_blank"
          href="http://opensource.org/licenses/mit-license.php"
        >MIT</a>.
        Available on{` `}
        <a
          className="has-text-primary"
          target="_blank"
          href="https://github.com/KrustyC/randomanswerz"
        >GitHub.</a>
      </p>
      </div>
    </div>
  </section>
)

export default Footer
