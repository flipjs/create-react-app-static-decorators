import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoryCategoryForm from '../advisory-categories/AdvisoryCategoryForm'

const NAME = 'AdvisoryCategoryFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoryCategoryFormView (props) {
  const model = new props.stores.advisoryCategories.api.Model()
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
AdvisoryCategoryFormView.displayName = NAME
AdvisoryCategoryFormView.propTypes = propTypes

export default observer(['stores'], AdvisoryCategoryFormView)

