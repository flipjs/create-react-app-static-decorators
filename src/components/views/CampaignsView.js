import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CampaignsSection from '../campaigns/CampaignsSection'

const NAME = 'CampaignsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CampaignsView (props) {
  const {campaigns} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Campaigns' />
      <CampaignsSection store={campaigns} title='Campaigns' />
    </section>
  )
}
CampaignsView.displayName = NAME
CampaignsView.propTypes = propTypes

export default observer(['stores'], CampaignsView)
