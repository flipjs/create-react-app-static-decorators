import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AddressForm from '../addresses/AddressForm'

const NAME = 'AddressFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AddressFormView (props) {
  const model = new props.stores.addresses.api.Model()
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Addresses' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <AddressForm model={model} />
        </div>
      </div>
    </section>
  )
}
AddressFormView.displayName = NAME
AddressFormView.propTypes = propTypes

export default observer(['stores'], AddressFormView)

