import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ThreatActorForm from '../threat-actors/ThreatActorForm'

const NAME = 'ThreatActorFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ThreatActorFormView (props) {
  const model = new props.stores.threatActors.api.Model()
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='ThreatActors' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <ThreatActorForm model={model} />
        </div>
      </div>
    </section>
  )
}
ThreatActorFormView.displayName = NAME
ThreatActorFormView.propTypes = propTypes

export default observer(['stores'], ThreatActorFormView)

