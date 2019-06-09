import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

const BannerPage = props => {
  return (
    <CSSTransition
          in={props.show}
          classNames='animation'
          timeout={{'enter': 6000, 'exit': 500 }}
          appear>
      <div className='layer click-through page'>
        <div className='container fixed-width'>
          <div className='section details'>
            <div className='title'>{props.title}</div>
            <div className='description'>{props.description}</div>
            <a className='action' href={props.link} target='_blank'>{props.actionText}</a>
          </div>
          <div className='section image'>
            <img src={props.image} />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

BannerPage.protoTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.image,
  show: PropTypes.bool
}

export default BannerPage