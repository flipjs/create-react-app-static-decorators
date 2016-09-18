import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import TtpsSection from '../ttps/TtpsSection'

const NAME = 'TtpsView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function TtpsView (props) {
  const {ttps} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='TTPs' />
      <TtpsSection store={ttps} title='TTPs' />
    </section>
  )
}
TtpsView.displayName = NAME
TtpsView.propTypes = propTypes

export default observer(['stores'], TtpsView)
