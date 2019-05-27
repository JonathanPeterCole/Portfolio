import React from 'react'

import Mesh from '../mesh/mesh'
import BannerPage from './banner-page'

import GithubLogo from './img/github.svg'

export default class Banner extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='banner'>
        <div className='layer'>
          <Mesh color={this.props.dark ? '29,35,45' : '224,228,235'} />
        </div>
        <div className='layer click-through'>
          <BannerPage title='Github' description='Check out some of my past work on GitHub.' actionText='Explore' link='https://github.com/JonathanPeterCole/' image={GithubLogo} />
        </div>
        <div className='gradient-fade'/>
      </div>
    )
  }
}