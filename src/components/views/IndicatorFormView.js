import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import IndicatorForm from '../indicators/IndicatorForm'

const NAME = 'IndicatorFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function IndicatorFormView (props) {
  const model = new props.stores.indicators.api.Model()
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
IndicatorFormView.displayName = NAME
IndicatorFormView.propTypes = propTypes

export default observer(['stores'], IndicatorFormView)

