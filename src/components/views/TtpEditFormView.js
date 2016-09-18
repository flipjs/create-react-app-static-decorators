import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import TtpForm from '../ttps/TtpForm'

const NAME = 'TtpEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function TtpEditFormView (props) {
  const {ttps} = props.stores
  const model = new ttps.api.Model()
  model.setState(ttps.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Ttps' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <TtpForm model={model} />
        </div>
      </div>
    </section>
  )
}
TtpEditFormView.displayName = NAME
TtpEditFormView.propTypes = propTypes

export default observer(['stores'], TtpEditFormView)

