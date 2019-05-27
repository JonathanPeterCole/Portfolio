import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import logoLight from './img/header-logo-light.svg'
import logoDark from './img/header-logo-dark.svg'
import lightIcon from './img/light-icon.svg'
import darkIcon from './img/dark-icon.svg'

const Header = props => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className={classNames('logo', {show: !props.dark})} src={logoLight} />
        <img className={classNames('logo', {show: props.dark})} src={logoDark} />
      </div>
      <a className='theme-toggle' onClick={props.toggleDarkTheme}>
        <img className={classNames('icon', {show: !props.dark})} src={lightIcon} />
        <img className={classNames('icon', {show: props.dark})} src={darkIcon} />
      </a>
    </header>
  )
}

export default Header
