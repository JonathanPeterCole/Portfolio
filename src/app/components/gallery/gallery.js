import React from 'react'

import GalleryImage from './gallery-image'

export default class Gallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSlide: 0
    }
    // Change slide every 10 seconds
    this.setInterval()
  }

  previousSlide = () => {
    let newSlide = this.state.currentSlide - 1
    if (newSlide < 0) {
      newSlide = this.props.images.length - 1
    }
    this.setState({currentSlide: newSlide})
    this.setInterval()
  }

  nextSlide = () => {
    let newSlide = this.state.currentSlide + 1
    if (newSlide > this.props.images.length - 1) {
      newSlide = 0
    }
    this.setState({currentSlide: newSlide})
    this.setInterval()
  }

  setInterval = () => {
    clearInterval(this.slideshowInterval)
    this.slideshowInterval = setInterval(this.nextSlide, 10000)
  }

  render () {
    return (
      <div className='gallery'>
        {this.props.images.map((image, key) => {
          return (
            <GalleryImage key={key} image={image.image} caption={image.caption} show={image.position === this.state.currentSlide} />
          )
        })}
        <div className='controls'>
          <div className='arrow left' onClick={this.previousSlide}>
            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
              <rect width='12' height='12' fill='none'/>
              <path d='M9,9.88,5.12,6,9,2.12A1,1,0,0,0,7.59.71L3,5.3A1,1,0,0,0,3,6.71l4.59,4.58A1,1,0,1,0,9,9.88Z' transform='translate(0)' fill='#8793a0'/>
            </svg>
          </div>
          <div className='arrow right' onClick={this.nextSlide}>
            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
              <rect width='12' height='12' fill='none'/>
              <path d='M3,11.29a1,1,0,0,0,1.41,0L9,6.71A1,1,0,0,0,9,5.3L4.41.71A1,1,0,0,0,3,2.12L6.88,6,3,9.88A1,1,0,0,0,3,11.29Z' transform='translate(0)' fill='#8793a0'/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}