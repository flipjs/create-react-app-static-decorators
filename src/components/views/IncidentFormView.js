import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IncidentForm from '../incidents/IncidentForm'

const NAME = 'IncidentFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IncidentFormView (props) {
  const model = new props.stores.incidents.api.Model()
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Incidents' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <IncidentForm model={model} />
        </div>
      </div>
    </section>
  )
}
IncidentFormView.displayName = NAME
IncidentFormView.propTypes = propTypes

export default observer(['stores'], IncidentFormView)

