import React from 'react'

import DetailsPage from '../../components/details/details-page'
import Gallery from '../../components/gallery/gallery'
import Tags from '../../components/tags/tags'

import GalleryImg1 from './gallery/clean-air-1.jpg'
import GalleryImg2 from './gallery/clean-air-2.jpg'

export default class CleanAirPage extends React.Component {
  render () {
    return (
      <DetailsPage 
        title='Clean Air Project'
        subheading='My University final year large team project, measuring air and noise pollution across Cardiff using sensors attached to bikes.'
        gradient={['#4c9cff', '#3366ff']}>
        <Gallery accentColor='#4c9cff' images={[
          {
            position: 0,
            image: GalleryImg1,
            caption: 'Final Product - Explore Page'
          },
          {
            position: 1,
            image: GalleryImg2,
            caption: 'Final Product - Profile Page'
          }
        ]}/>
        <Tags tags={['Express', 'ReactJS', 'SASS', 'Android', 'AWS', 'Terraform']} />
      </DetailsPage>
    )
  }
}