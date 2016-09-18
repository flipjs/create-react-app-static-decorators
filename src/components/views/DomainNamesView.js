import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import DomainNamesSection from '../domain-names/DomainNamesSection'

const NAME = 'DomainNamesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function DomainNamesView (props) {
  const {domainNames} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Domain Names' />
      <DomainNamesSection store={domainNames} title='Domain Names' />
    </section>
  )
}
DomainNamesView.displayName = NAME
DomainNamesView.propTypes = propTypes

export default observer(['stores'], DomainNamesView)
