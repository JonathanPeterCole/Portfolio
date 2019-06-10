import React from 'react'
import PropTypes from 'prop-types'

const Tags = props => {
  return (
    <div className='tags'>
      <div className='tag-container'>
        {props.tags.map((tag, key) => (
          <div key={key} className='tag'>{tag}</div>
        ))}
      </div>
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array
}

export default Tags
