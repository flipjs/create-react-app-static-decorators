import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import TtpForm from '../ttps/TtpForm'

const NAME = 'TtpFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function TtpFormView (props) {
  const model = new props.stores.ttps.api.Model()
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
TtpFormView.displayName = NAME
TtpFormView.propTypes = propTypes

export default observer(['stores'], TtpFormView)

