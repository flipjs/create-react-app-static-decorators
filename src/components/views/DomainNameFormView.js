import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import DomainNameForm from '../domain-names/DomainNameForm'

const NAME = 'DomainNameFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function DomainNameFormView (props) {
  const model = new props.stores.domainNames.api.Model()
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
DomainNameFormView.displayName = NAME
DomainNameFormView.propTypes = propTypes

export default observer(['stores'], DomainNameFormView)

