import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PanelSummaryTotal from '../widgets/PanelSummaryTotal'

const NAME = 'IncidentsSummaryWidget'

export class IncidentsSummaryWidget extends Component {
  render () {
    return (
      <PanelSummaryTotal
        domain='incidents'
        route='incidents'
        title='Incidents'
        theme='primary'
      />
    )
  }
}
IncidentsSummaryWidget.displayName = NAME

export default observer(IncidentsSummaryWidget)

