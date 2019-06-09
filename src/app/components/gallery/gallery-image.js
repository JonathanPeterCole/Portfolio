import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import Spinner from '../spinner/spinner'

export default class GalleryImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      showSpinner: true
    }
  }

  imageLoaded = () => {
    // Show the image
    this.setState({
      loaded: true
    })
    // When the image has finished loading, remove the spinner from the DOM
    setTimeout(() => {
      this.setState({
        showSpinner: false
      })
    }, 300)
  }

  render () {
    return (
      <CSSTransition
        in={this.props.show}
        classNames='animation'
        timeout={{'enter': 400, 'exit': 400 }}
        appear>
        <div className='image'>
          { this.state.showSpinner &&
            <Spinner className='loader' color={this.props.accentColor} />
          }
          <img className={classNames({loaded: this.state.loaded})} src={this.props.image} onLoad={this.imageLoaded} />
          <div className='caption-container'>
            <div className='caption'>
              {this.props.caption}
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

GalleryImage.protoTypes = {
  show: PropTypes.bool,
  image: PropTypes.string,
  caption: PropTypes.string,
  accentColor: PropTypes.string
}
