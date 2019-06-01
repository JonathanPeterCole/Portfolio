import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ProjectTile = props => {
  return (
    <a className={classNames('project-tile', {large: props.large})} href={props.link} target='_blank'>
      <div className='details'>
        <div className='type'>{props.type}</div>
        <div className='title'>{props.title}</div>
        <div className='description'>{props.description}</div>
      </div>
      <div className='action'>{props.action}</div>
    </a>
  )
}

ProjectTile.protoTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.image,
  large: PropTypes.boolean
}

export default ProjectTile
