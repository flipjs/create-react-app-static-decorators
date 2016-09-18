import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import ObservableForm from '../observables/ObservableForm'

const NAME = 'ObservableFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function ObservableFormView (props) {
  const model = new props.stores.observables.api.Model()
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
ObservableFormView.displayName = NAME
ObservableFormView.propTypes = propTypes

export default observer(['stores'], ObservableFormView)

