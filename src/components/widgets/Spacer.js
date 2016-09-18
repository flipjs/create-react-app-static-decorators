import React, { PropTypes } from 'react'

const NAME = 'Spacer'

const propTypes = {
  width: PropTypes.number.isRequired
}

export function Spacer (props) {
  return (
    <span style={{display: 'inline-block', width: props.width}} />
  )
}
Spacer.displayName = NAME
Spacer.propTypes = propTypes

export default Spacer

