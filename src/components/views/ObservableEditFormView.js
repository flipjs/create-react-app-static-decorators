import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ObservableForm from '../observables/ObservableForm'

const NAME = 'ObservableEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ObservableEditFormView (props) {
  const {observables} = props.stores
  const model = new observables.api.Model()
  model.setState(observables.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Observables' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <ObservableForm model={model} />
        </div>
      </div>
    </section>
  )
}
ObservableEditFormView.displayName = NAME
ObservableEditFormView.propTypes = propTypes

export default observer(['stores'], ObservableEditFormView)

