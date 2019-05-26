import React from 'react'
import classNames from 'classnames'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      darkTheme: false
    }
  }
  render () {
    return (
      <div className={classNames('theme-provider', {dark: this.state.darkTheme})}>
        <div className='app'>
          Test App
        </div>
      </div>
    )
  }
}