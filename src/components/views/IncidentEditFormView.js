import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IncidentForm from '../incidents/IncidentForm'

const NAME = 'IncidentEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IncidentEditFormView (props) {
  const {incidents} = props.stores
  const model = new incidents.api.Model()
  model.setState(incidents.selected.toJS())
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
IncidentEditFormView.displayName = NAME
IncidentEditFormView.propTypes = propTypes

export default observer(['stores'], IncidentEditFormView)

