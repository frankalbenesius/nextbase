/* global window */
import React from 'react'

import Thing from '../components/Thing'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Thing>
          <h1>neat</h1>
        </Thing>
      </div>
    )
  }
}

export default IndexPage
