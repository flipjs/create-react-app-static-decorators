import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'

const NAME = 'DebugForm'

const propTypes = {
  disabled: PropTypes.bool.isRequired,
  model: PropTypes.object.isRequired
}

const defaultProps = {
  disabled: false
}

export const DebugForm = (props) => {
  if (props.disabled) return null
  return (
    <div className='form-group'>
      <pre>{JSON.stringify(props.model.toJS(), null, 4)}</pre>
    </div>
  )
}

DebugForm.displayName = NAME
DebugForm.propTypes = propTypes
DebugForm.defaultProps = defaultProps

export default observer(DebugForm)

