import React from 'react'

import Mesh from '../mesh/mesh'
import BannerPage from './banner-page'

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
    setInterval(this.nextPage, 10000)
  }

  nextPage = () => {
    let newPage = this.state.currentPage + 1
    if (newPage > this.pages.length - 1) {
      newPage = 0
    }
    this.setState({currentPage: newPage})
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
      </div>
    )
  }
}