import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import CoasSection from '../coas/CoasSection'

const NAME = 'CoasView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function CoasView (props) {
  const {coas} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='COAs' />
      <CoasSection store={coas} title='COAs' />
    </section>
  )
}
CoasView.displayName = NAME
CoasView.propTypes = propTypes

export default observer(['stores'], CoasView)
