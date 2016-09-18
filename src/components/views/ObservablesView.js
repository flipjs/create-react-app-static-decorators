import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ObservablesSection from '../observables/ObservablesSection'

const NAME = 'ObservablesView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ObservablesView (props) {
  const {observables} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Observables' />
      <ObservablesSection store={observables} title='Observables' />
    </section>
  )
}
ObservablesView.displayName = NAME
ObservablesView.propTypes = propTypes

export default observer(['stores'], ObservablesView)
