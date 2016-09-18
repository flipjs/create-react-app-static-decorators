import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PanelSummaryTotal from '../widgets/PanelSummaryTotal'

const NAME = 'ThreatActorsSummaryWidget'

export class ThreatActorsSummaryWidget extends Component {
  render () {
    return (
      <PanelSummaryTotal
        domain='threatActors'
        route='threat_actors'
        title='Threat Actors'
        theme='warning'
      />
    )
  }
}
ThreatActorsSummaryWidget.displayName = NAME

export default observer(ThreatActorsSummaryWidget)

