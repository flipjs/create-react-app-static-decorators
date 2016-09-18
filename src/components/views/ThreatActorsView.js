import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'

const NAME = 'ThreatActorsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ThreatActorsView (props) {
  const {threatActors} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Threat Actors' />
      <ThreatActorsSection store={threatActors} title='Threat Actors' />
    </section>
  )
}
ThreatActorsView.displayName = NAME
ThreatActorsView.propTypes = propTypes

export default observer(['stores'], ThreatActorsView)
