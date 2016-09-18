import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PanelSummaryTotal from '../widgets/PanelSummaryTotal'

const NAME = 'AdvisoriesSummaryWidget'

export class AdvisoriesSummaryWidget extends Component {
  render () {
    return (
      <PanelSummaryTotal
        domain='advisories'
        route='advisories'
        title='Advisories'
        theme='success'
      />
    )
  }
}
AdvisoriesSummaryWidget.displayName = NAME

export default observer(AdvisoriesSummaryWidget)

