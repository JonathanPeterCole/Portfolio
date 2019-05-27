import React from 'react'
import PropTypes from 'prop-types'

const BannerPage = props => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='section details'>
          <div className='title'>{props.title}</div>
          <div className='description'>{props.description}</div>
          <a className='action' href={props.link}>{props.actionText}</a>
        </div>
        <div className='section image'>
          <img src={props.image} />
        </div>
      </div>
    </div>
  )
}

BannerPage.protoTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.image
}

export default BannerPage