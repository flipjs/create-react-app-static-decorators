import React, { PropTypes } from 'react'

const NAME = 'PanelFooter'

const propTypes = {
  children: PropTypes.any
}

export function PanelFooter (props) {
  return (
    <div className='panel-footer'>
      {props.children}
    </div>
  )
}
PanelFooter.displayName = NAME
PanelFooter.propTypes = propTypes

export default PanelFooter

