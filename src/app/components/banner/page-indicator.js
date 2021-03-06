import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PageIndicator = props => {
  let dots = []
  for (let i = 0; i < props.count; i++) {
    dots.push(
      <div key={i} className={classNames('dot-container', { active: i === props.currentPage })} onClick={() => {
        props.setPage(i)
      }}>
        <div className='dot' />
      </div>
    )
  }
  return (
    <div className='page-indicator'>
      {dots}
    </div>
  )
}

PageIndicator.propTypes = {
  count: PropTypes.number,
  currentPage: PropTypes.number,
  setPage: PropTypes.func
}

export default PageIndicator
