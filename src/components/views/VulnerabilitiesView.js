import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import VulnerabilitiesSection from '../vulnerabilities/VulnerabilitiesSection'

const NAME = 'VulnerabilitiesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function VulnerabilitiesView (props) {
  const {vulnerabilities} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Vulnerabilities' />
      <VulnerabilitiesSection store={vulnerabilities} title='Vulnerabilities' />
    </section>
  )
}
VulnerabilitiesView.displayName = NAME
VulnerabilitiesView.propTypes = propTypes

export default observer(['stores'], VulnerabilitiesView)
