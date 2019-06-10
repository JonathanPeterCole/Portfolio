import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DetailsPage = props => {
  return (
    <div className='details-page-container'>
      <div className='details-page'>
        <Link className='close-btn' to={'/'}>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
            <rect width='12' height='12' fill='none' />
            <path d='M7.41,6,11.3,2.11A1,1,0,0,0,9.89.7L6,4.59,2.11.7A1,1,0,0,0,.7,2.11L4.59,6,.7,9.89A1,1,0,0,0,2.11,11.3L6,7.41,9.89,11.3A1,1,0,0,0,11.3,9.89Z' transform='translate(0)' fill='#8793a0' />
          </svg>
        </Link>
        <div className='color-bar' style={
          {
            background: `linear-gradient(to right, ${props.gradient[0]}, ${props.gradient[1]})`
          }
        } />
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
