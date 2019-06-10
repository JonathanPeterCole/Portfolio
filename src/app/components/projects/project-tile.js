import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const ProjectTile = props => {
  // Prepare the tile contents
  let content = (
    <>
      <div className='details'>
        <div className='type'>{props.type}</div>
        <div className='title'>{props.title}</div>
        <div className='description'>{props.description}</div>
      </div>
      <div className='action'>{props.action}</div>
    </>
  )
  // Handle external links separately from React Router links
  if (props.external) {
    return (
      <a className={classNames('project-tile', { large: props.large })} href={props.link} target='_blank'>
        {content}
      </a>
    )
  } else {
    return (
      <Link className={classNames('project-tile', { large: props.large })} to={props.link}>
        {content}
      </Link>
    )
  }
}

ProjectTile.protoTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.image,
  large: PropTypes.boolean,
  external: PropTypes.boolean
}

export default ProjectTile
