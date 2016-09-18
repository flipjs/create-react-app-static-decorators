import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoryForm from '../advisories/AdvisoryForm'

const NAME = 'AdvisoryFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoryFormView (props) {
  const model = new props.stores.advisories.api.Model()
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Advisories' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <AdvisoryForm model={model} />
        </div>
      </div>
    </section>
  )
}
AdvisoryFormView.displayName = NAME
AdvisoryFormView.propTypes = propTypes

export default observer(['stores'], AdvisoryFormView)

