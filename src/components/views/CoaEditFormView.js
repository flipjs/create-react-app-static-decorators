import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CoaForm from '../coas/CoaForm'

const NAME = 'CoaEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CoaEditFormView (props) {
  const {coas} = props.stores
  const model = new coas.api.Model()
  model.setState(coas.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Coas' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <CoaForm model={model} />
        </div>
      </div>
    </section>
  )
}
CoaEditFormView.displayName = NAME
CoaEditFormView.propTypes = propTypes

export default observer(['stores'], CoaEditFormView)

