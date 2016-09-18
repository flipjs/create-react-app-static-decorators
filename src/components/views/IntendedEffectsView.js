import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'

const NAME = 'IntendedEffectsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IntendedEffectsView (props) {
  const {intendedEffects} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Intended Effects' />
      <IntendedEffectsSection store={intendedEffects} title='Intended Effects' />
    </section>
  )
}
IntendedEffectsView.displayName = NAME
IntendedEffectsView.propTypes = propTypes

export default observer(['stores'], IntendedEffectsView)
