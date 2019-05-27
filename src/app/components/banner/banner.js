import React from 'react'

import Mesh from '../mesh/mesh'

export default class Banner extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='banner'>
        <div className='layer'>
          <Mesh color={this.props.dark ? '29,35,45' : '224,228,235'} />
        </div>
        <div className='layer click-through'>
          Content
        </div>
        <div className='gradient-fade'/>
      </div>
    )
  }
}