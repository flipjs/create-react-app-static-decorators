import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IndicatorForm from '../indicators/IndicatorForm'

const NAME = 'IndicatorEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IndicatorEditFormView (props) {
  const {indicators} = props.stores
  const model = new indicators.api.Model()
  model.setState(indicators.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Indicators' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <IndicatorForm model={model} />
        </div>
      </div>
    </section>
  )
}
IndicatorEditFormView.displayName = NAME
IndicatorEditFormView.propTypes = propTypes

export default observer(['stores'], IndicatorEditFormView)

