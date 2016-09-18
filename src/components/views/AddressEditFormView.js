import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AddressForm from '../addresses/AddressForm'

const NAME = 'AddressEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AddressEditFormView (props) {
  const {addresses} = props.stores
  const model = new addresses.api.Model()
  model.setState(addresses.selected.toJS())
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
AddressEditFormView.displayName = NAME
AddressEditFormView.propTypes = propTypes

export default observer(['stores'], AddressEditFormView)

