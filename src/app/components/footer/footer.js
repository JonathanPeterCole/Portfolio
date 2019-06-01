import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import logoLight from './img/footer-logo-light.svg'
import logoDark from './img/footer-logo-dark.svg'

const Footer = props => {
  return (
    <footer className='footer'>
      <div className='logo-container'>
        <img className={classNames('logo', {show: !props.dark})} src={logoLight} />
        <img className={classNames('logo', {show: props.dark})} src={logoDark} />
      </div>
      <div className='link-container'>
        <a href='https://github.com/JonathanPeterCole/' target='_blank'>GitHub</a>
        <a href='https://www.linkedin.com/in/jonathan-cole/' target='_blank'>LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer
