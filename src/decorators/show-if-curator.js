import React from 'react'
import { authSession } from '../stores'

function showIfCurator (Component) {
  class CuratorComponent extends React.Component {
    render () {
      if (authSession.isCurator) {
        return <Component {...this.props} />
      } else {
        return null
      }
    }
  }
  return CuratorComponent
}

export default showIfCurator

