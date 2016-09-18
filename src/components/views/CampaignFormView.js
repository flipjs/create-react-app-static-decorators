import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CampaignForm from '../campaigns/CampaignForm'

const NAME = 'CampaignFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CampaignFormView (props) {
  const model = new props.stores.campaigns.api.Model()
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
CampaignFormView.displayName = NAME
CampaignFormView.propTypes = propTypes

export default observer(['stores'], CampaignFormView)

