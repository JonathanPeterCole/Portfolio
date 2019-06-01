import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ProjectTile from './project-tile';

const Projects = props => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='grid'>
          <div className='row'>
            <div className='column'>
              <ProjectTile
                type='Project'
                title='Clean Air Project'
                description='My University final year large team project, measuring air and noise pollution across Cardiff using sensors attached to bikes.'
                action='Coming Soon'
                large />
            </div>
            <div className='column'>
              <div className='row'>
                <ProjectTile
                  type='Project'
                  title='Tech Support Site'
                  description='A website to advertise tech support services and provide easy email bookings.'
                  action='Coming Soon' />
              </div>
              <div className='row'>
                <ProjectTile
                  type='Project'
                  title='Porfolio'
                  description='See the source code behind this website.'
                  action='Source Code >'
                  link='https://github.com/JonathanPeterCole/Portfolio' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
