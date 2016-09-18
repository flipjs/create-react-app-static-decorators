import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IntendedEffectForm from '../intended-effects/IntendedEffectForm'

const NAME = 'IntendedEffectEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IntendedEffectEditFormView (props) {
  const {intendedEffects} = props.stores
  const model = new intendedEffects.api.Model()
  model.setState(intendedEffects.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Intended Effects' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <IntendedEffectForm model={model} />
        </div>
      </div>
    </section>
  )
}
IntendedEffectEditFormView.displayName = NAME
IntendedEffectEditFormView.propTypes = propTypes

export default observer(['stores'], IntendedEffectEditFormView)

