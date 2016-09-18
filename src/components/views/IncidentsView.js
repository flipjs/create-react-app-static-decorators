import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IncidentsSection from '../incidents/IncidentsSection'

const NAME = 'IncidentsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IncidentsView (props) {
  const {incidents} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Incidents' />
      <IncidentsSection store={incidents} title='Incidents' />
    </section>
  )
}
IncidentsView.displayName = NAME
IncidentsView.propTypes = propTypes

export default observer(['stores'], IncidentsView)
