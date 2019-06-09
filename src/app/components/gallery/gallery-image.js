import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

const GalleryImage = props => {
  return (
    <CSSTransition
      in={props.show}
      classNames='animation'
      timeout={{'enter': 400, 'exit': 400 }}
      appear>
      <div className='image'>
        <img src={props.image} />
        <div className='caption-container'>
          <div className='caption'>
            {props.caption}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

GalleryImage.protoTypes = {
  show: PropTypes.bool,
  image: PropTypes.string,
  caption: PropTypes.string
}

export default GalleryImage
