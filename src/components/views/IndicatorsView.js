import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IndicatorsSection from '../indicators/IndicatorsSection'

const NAME = 'IndicatorsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IndicatorsView (props) {
  const {indicators} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Indicators' />
      <IndicatorsSection store={indicators} title='Indicators' />
    </section>
  )
}
IndicatorsView.displayName = NAME
IndicatorsView.propTypes = propTypes

export default observer(['stores'], IndicatorsView)
