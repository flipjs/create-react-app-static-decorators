import React, { PropTypes } from 'react'

const NAME = 'PanelBody'

const propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.any
}

const defaultProps = {
  style: {
    minHeight: 0
  }
}

export function PanelBody (props) {
  return (
    <div className='panel-body' style={props.style}>
      {props.children}
    </div>
  )
}
PanelBody.displayName = NAME
PanelBody.propTypes = propTypes
PanelBody.defaultProps = defaultProps

export default PanelBody

