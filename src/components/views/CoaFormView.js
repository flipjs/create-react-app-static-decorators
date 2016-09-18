import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CoaForm from '../coas/CoaForm'

const NAME = 'CoaFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CoaFormView (props) {
  const model = new props.stores.coas.api.Model()
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
CoaFormView.displayName = NAME
CoaFormView.propTypes = propTypes

export default observer(['stores'], CoaFormView)

