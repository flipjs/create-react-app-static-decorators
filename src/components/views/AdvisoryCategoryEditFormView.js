import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoryCategoryForm from '../advisory-categories/AdvisoryCategoryForm'

const NAME = 'AdvisoryCategoryEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoryCategoryEditFormView (props) {
  const {advisoryCategories} = props.stores
  const model = new advisoryCategories.api.Model()
  model.setState(advisoryCategories.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Advisory Categories' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <AdvisoryCategoryForm model={model} />
        </div>
      </div>
    </section>
  )
}
AdvisoryCategoryEditFormView.displayName = NAME
AdvisoryCategoryEditFormView.propTypes = propTypes

export default observer(['stores'], AdvisoryCategoryEditFormView)

