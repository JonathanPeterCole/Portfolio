import React from 'react'
import PropTypes from 'prop-types'

const DetailsPage = props => {
  return (
    <div className='details-page-container'>
      <div className='details-page'>
        <div className='color-bar' style={
          {
            background: `linear-gradient(to right, ${props.gradient[0]}, ${props.gradient[1]})`
          }
        }/>
        <div className='details-header'>
          <div className='title'>
            {props.title}
          </div>
          <div className='subheading'>
            {props.subheading}
          </div>
        </div>
        <div className='content container fixed-width'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

DetailsPage.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subheading: PropTypes.string,
  gradient: PropTypes.array
}

export default DetailsPage