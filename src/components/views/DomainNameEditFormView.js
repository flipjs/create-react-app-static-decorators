import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import DomainNameForm from '../domain-names/DomainNameForm'

const NAME = 'DomainNameEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function DomainNameEditFormView (props) {
  const {domainNames} = props.stores
  const model = new domainNames.api.Model()
  model.setState(domainNames.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='DomainNames' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <DomainNameForm model={model} />
        </div>
      </div>
    </section>
  )
}
DomainNameEditFormView.displayName = NAME
DomainNameEditFormView.propTypes = propTypes

export default observer(['stores'], DomainNameEditFormView)

