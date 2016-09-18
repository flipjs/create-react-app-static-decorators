import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoryCategoriesSection from '../advisory-categories/AdvisoryCategoriesSection'

const NAME = 'AdvisoryCategoriesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoryCategoriesView (props) {
  const {advisoryCategories} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Advisory Categories' />
      <AdvisoryCategoriesSection store={advisoryCategories} title='Advisory Categories' />
    </section>
  )
}
AdvisoryCategoriesView.displayName = NAME
AdvisoryCategoriesView.propTypes = propTypes

export default observer(['stores'], AdvisoryCategoriesView)
