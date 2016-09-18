import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PanelSummaryTotal from '../widgets/PanelSummaryTotal'

const NAME = 'CampaignsSummaryWidget'

export class CampaignsSummaryWidget extends Component {
  render () {
    return (
      <PanelSummaryTotal
        domain='campaigns'
        route='campaigns'
        title='Campaigns'
        theme='danger'
      />
    )
  }
}
CampaignsSummaryWidget.displayName = NAME

export default observer(CampaignsSummaryWidget)

