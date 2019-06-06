import React from 'react'

import DetailsPage from '../../components/details/details-page'

export default class TechSupportPage extends React.Component {
  render () {
    return (
      <DetailsPage 
        title='Tech Support Site'
        subheading='A website to advertise tech support services and provide easy email bookings.'
        gradient={['#db2525', '#9e0538']}>
        Content will go here...
      </DetailsPage>
    )
  }
}