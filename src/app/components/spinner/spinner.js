import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Spinner = props => {
  return (
    <div className={classNames('spinner-container', props.className)}>
      <div className='spinner'>
        <svg className='circle' viewBox='0 0 50 50'>
          <circle className='path' cx={25} cy={25} r={20} fill='none' stroke={props.color} strokeWidth={3} strokeMiterlimit={10} />
        </svg>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

export default Spinner
