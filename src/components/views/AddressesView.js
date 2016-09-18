import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import AddressesSection from '../addresses/AddressesSection'

const NAME = 'AddressesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function AddressesView (props) {
  const {addresses} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Addresses' />
      <AddressesSection store={addresses} title='Addresses' />
    </section>
  )
}
AddressesView.displayName = NAME
AddressesView.propTypes = propTypes

export default observer(['stores'], AddressesView)
