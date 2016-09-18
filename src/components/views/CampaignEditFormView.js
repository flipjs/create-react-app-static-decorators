import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CampaignForm from '../campaigns/CampaignForm'

const NAME = 'CampaignEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CampaignEditFormView (props) {
  const {campaigns} = props.stores
  const model = new campaigns.api.Model()
  model.setState(campaigns.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Campaigns' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <CampaignForm model={model} />
        </div>
      </div>
    </section>
  )
}
CampaignEditFormView.displayName = NAME
CampaignEditFormView.propTypes = propTypes

export default observer(['stores'], CampaignEditFormView)

