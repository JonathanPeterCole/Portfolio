import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import logoLight from './img/header-logo-light.svg'
import logoDark from './img/header-logo-dark.svg'

const Header = props => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className={classNames('logo', {show: !props.dark})} src={logoLight} />
        <img className={classNames('logo', {show: props.dark})} src={logoDark} />
      </div>
    </header>
  )
}

export default Header
