import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AdvisoriesSection from '../advisories/AdvisoriesSection'

const NAME = 'AdvisoriesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AdvisoriesView (props) {
  const {advisories} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Advisories' />
      <AdvisoriesSection store={advisories} title='Advisories' />
    </section>
  )
}
AdvisoriesView.displayName = NAME
AdvisoriesView.propTypes = propTypes

export default observer(['stores'], AdvisoriesView)
