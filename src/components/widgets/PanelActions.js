import React, { PropTypes } from 'react'

const NAME = 'PanelActions'

const propTypes = {
  children: PropTypes.any.isRequired
}

export function PanelActions (props) {
  return (
    <div className='panel-actions'>
      {props.children}
    </div>
  )
}
PanelActions.displayName = NAME
PanelActions.propTypes = propTypes

export default PanelActions

