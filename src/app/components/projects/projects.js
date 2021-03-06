import React from 'react'
import ProjectTile from './project-tile'

const Projects = props => {
  return (
    <div className='projects'>
      <div className='container fixed-width'>
        <div className='grid'>
          <div className='row'>
            <div className='column'>
              <ProjectTile
                type='Project'
                title='Clean Air Project'
                description='My University final year large team project, measuring air and noise pollution across Cardiff using sensors attached to bikes.'
                action='See More >'
                link='/clean-air-project'
                large />
            </div>
            <div className='column'>
              <div className='row'>
                <ProjectTile
                  type='Project'
                  title='Tech Support Site'
                  description='A website to advertise tech support services and provide easy email bookings.'
                  action='See More >'
                  link='/tech-support-site' />
              </div>
              <div className='row'>
                <ProjectTile
                  type='Project'
                  title='Porfolio'
                  description='See the source code behind this website.'
                  action='Source Code >'
                  link='https://github.com/JonathanPeterCole/Portfolio'
                  external />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
