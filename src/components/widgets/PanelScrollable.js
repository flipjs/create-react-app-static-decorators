import React, { PropTypes } from 'react'

const NAME = 'PanelScrollable'

const propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.element
}

export function PanelScrollable (props) {
  return (
    <div className='scrollable' data-plugin-scrollable style={props.style.height}>
      <div className='scrollable-content' style={props.style.marginRight}>
        {props.children}
      </div>
    </div>
  )
}
PanelScrollable.displayName = NAME
PanelScrollable.propTypes = propTypes

export default PanelScrollable

