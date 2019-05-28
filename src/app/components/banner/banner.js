import React from 'react'

import Mesh from '../mesh/mesh'
import BannerPage from './banner-page'
import PageIndicator from './page-indicator'

import GitHubLogo from './img/github.svg'
import LinkedInLogo from './img/linkedin.svg'

export default class Banner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    // Prepare the page data
    this.pages = [
      {
        'title': 'GitHub',
        'description': 'Check out some of my past work on GitHub.',
        'actionText': 'Explore',
        'link': 'https://github.com/JonathanPeterCole/',
        'image': GitHubLogo
      },
      {
        'title': 'LinkedIn',
        'description': 'See my skills and experience on LinkedIn.',
        'actionText': 'Explore',
        'link': 'https://www.linkedin.com/in/jonathan-cole/',
        'image': LinkedInLogo
      }
    ]
    // Change page every 10 seconds
    this.setInterval()
  }

  nextPage = () => {
    let newPage = this.state.currentPage + 1
    if (newPage > this.pages.length - 1) {
      newPage = 0
    }
    this.setState({currentPage: newPage})
  }

  setPage = (page) => {
    this.setInterval()
    this.setState({currentPage: page})
  }

  setInterval = () => {
    clearInterval(this.slideshowInterval)
    this.slideshowInterval = setInterval(this.nextPage, 10000)
  }

  render () {
    return (
      <div className='banner'>
        <div className='layer'>
          <Mesh color={this.props.dark ? '29,35,45' : '224,228,235'} />
        </div>
        {this.pages.map((page, key) => {
          return (
            <BannerPage
              title={page.title}
              description={page.description}
              actionText={page.actionText}
              link={page.link}
              image={page.image}
              show={key === this.state.currentPage} />
          )
        })}
        <div className='gradient-fade'/>
        <PageIndicator count={this.pages.length} currentPage={this.state.currentPage} setPage={this.setPage} />
      </div>
    )
  }
}