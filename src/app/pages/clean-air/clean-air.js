import React from 'react'

import DetailsPage from '../../components/details/details-page'
import Gallery from '../../components/gallery/gallery'
import Tags from '../../components/tags/tags'

import GalleryImg1 from './gallery/clean-air-1.jpg'
import GalleryImg2 from './gallery/clean-air-2.jpg'
import GalleryImg3 from './gallery/clean-air-3.jpg'
import GalleryImg4 from './gallery/clean-air-4.jpg'
import GalleryImg5 from './gallery/clean-air-5.jpg'
import GalleryImg6 from './gallery/clean-air-6.jpg'

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
          },
          {
            position: 2,
            image: GalleryImg3,
            caption: 'Personal Prototype - Explore Page'
          },
          {
            position: 3,
            image: GalleryImg4,
            caption: 'Personal Prototype - Profile Page'
          },
          {
            position: 4,
            image: GalleryImg5,
            caption: 'Personal Prototype - History Page'
          },
          {
            position: 5,
            image: GalleryImg6,
            caption: 'Personal Prototype - Settings Page'
          }
        ]}/>
        <Tags tags={['Express', 'ReactJS', 'SASS', 'Android', 'AWS', 'Terraform']} />
      </DetailsPage>
    )
  }
}