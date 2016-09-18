import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoryForm from '../advisories/AdvisoryForm'

const NAME = 'AdvisoryEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoryEditFormView (props) {
  const {advisories} = props.stores
  const model = new advisories.api.Model()
  model.setState(advisories.selected.toJS())
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
AdvisoryEditFormView.displayName = NAME
AdvisoryEditFormView.propTypes = propTypes

export default observer(['stores'], AdvisoryEditFormView)

