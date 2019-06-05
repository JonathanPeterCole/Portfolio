import React from 'react'
import { Route } from 'react-router-dom'
import classNames from 'classnames'

import Header from './components/header/header'
import Banner from './components/banner/banner'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'

import CleanAirPage from './pages/clean-air/clean-air'
import DetailsPageManager from './components/details/details-page-manager';

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
          <div className='container'>
            <Header dark={this.state.darkTheme} toggleDarkTheme={this.toggleDarkTheme} />
            <Banner dark={this.state.darkTheme} />
            <Projects />
            <Footer dark={this.state.darkTheme} />
          </div>
        </div>
        <DetailsPageManager>
          <Route path={`/clean-air-project`} component={CleanAirPage} />
        </DetailsPageManager>
      </div>
    )
  }
}