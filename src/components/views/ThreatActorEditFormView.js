import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ThreatActorForm from '../threat-actors/ThreatActorForm'

const NAME = 'ThreatActorEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ThreatActorEditFormView (props) {
  const {threatActors} = props.stores
  const model = new threatActors.api.Model()
  model.setState(threatActors.selected.toJS())
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
ThreatActorEditFormView.displayName = NAME
ThreatActorEditFormView.propTypes = propTypes

export default observer(['stores'], ThreatActorEditFormView)

