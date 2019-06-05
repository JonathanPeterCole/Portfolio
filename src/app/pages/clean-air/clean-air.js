import React from 'react'

import DetailsPage from '../../components/details/details-page'

export default class CleanAirPage extends React.Component {
  render () {
    return (
      <DetailsPage 
        title='Clean Air Project'
        subheading='My University final year large team project, measuring air and noise pollution across Cardiff using sensors attached to bikes.'
        gradient={['#4c9cff', '#3366ff']}>
        Content will go here...
      </DetailsPage>
    )
  }
}