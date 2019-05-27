import React from 'react'
import classNames from 'classnames'

import Header from './components/header/header'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      darkTheme: JSON.parse(localStorage.getItem('darkTheme'))
    }
  }

  toggleDarkTheme = () => {
    localStorage.setItem('darkTheme', !this.state.darkTheme)
    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  render () {
    return (
      <div className={classNames('theme-provider', {dark: this.state.darkTheme})}>
        <div className='app'>
          <Header dark={this.state.darkTheme} toggleDarkTheme={this.toggleDarkTheme} />
          <div className='content'>Content</div>
        </div>
      </div>
    )
  }
}