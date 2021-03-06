import React from 'react'
import PropTypes from 'prop-types'

const ActionLinks = props => {
  return (
    <div className='action-links'>
      <div className='action-link-container'>
        {props.links.map((link, key) => (
          <a key={key} className='action-link' href={link.url} target='_blank'>{link.name}</a>
        ))}
      </div>
    </div>
  )
}

ActionLinks.propTypes = {
  links: PropTypes.array
}

export default ActionLinks
