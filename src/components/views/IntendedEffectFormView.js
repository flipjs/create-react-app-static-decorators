import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IntendedEffectForm from '../intended-effects/IntendedEffectForm'

const NAME = 'IntendedEffectFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IntendedEffectFormView (props) {
  const model = new props.stores.intendedEffects.api.Model()
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
IntendedEffectFormView.displayName = NAME
IntendedEffectFormView.propTypes = propTypes

export default observer(['stores'], IntendedEffectFormView)

