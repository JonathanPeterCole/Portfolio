import React from 'react'

import DetailsPage from '../../components/details/details-page'
import Gallery from '../../components/gallery/gallery'
import Tags from '../../components/tags/tags'
import ActionLinks from '../../components/action-links/action-links'

import GalleryImg1 from './gallery/tech-support-site-1.jpg'
import GalleryImg2 from './gallery/tech-support-site-2.jpg'
import GalleryImg3 from './gallery/tech-support-site-3.jpg'
import GalleryImg4 from './gallery/tech-support-site-4.jpg'

export default class TechSupportPage extends React.Component {
  render () {
    return (
      <DetailsPage
        title='Tech Support Site'
        subheading='A website to advertise tech support services and provide easy email bookings.'
        gradient={['#db2525', '#9e0538']}>
        <Gallery accentColor='#db2525' images={[
          {
            image: GalleryImg1,
            caption: 'Homepage'
          },
          {
            image: GalleryImg2,
            caption: 'Booking Page - Service Selection'
          },
          {
            image: GalleryImg3,
            caption: 'Booking Page - On/Off Site Selection'
          },
          {
            image: GalleryImg4,
            caption: 'Booking Page - Booking Form'
          }
        ]} />
        <Tags tags={['Flask', 'JQuery', 'CSS', 'Digital Ocean']} />
        <ActionLinks links={[
          {
            name: 'Source Code',
            url: 'https://github.com/JonathanPeterCole/Tech-Support-Site'
          }
        ]} />
      </DetailsPage>
    )
  }
}
