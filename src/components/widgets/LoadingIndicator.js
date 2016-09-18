import React, { PropTypes } from 'react'
import { ICONS } from '../../constants'

const NAME = 'LoadingIndicator'

const propTypes = {
  size: PropTypes.number.isRequired,
  center: PropTypes.bool.isRequired
}

const defaultProps = {
  size: 30,
  center: false
}

function setFontSize (size) {
  return {
    fontSize: size
  }
}

export function LoadingIndicator (props) {
  return (
    <div className={props.center ? 'text-center' : ''} style={setFontSize(props.size)}>
      <i className={`${ICONS.spinner} fa-spin m-none`}></i>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
LoadingIndicator.displayName = NAME
LoadingIndicator.propTypes = propTypes
LoadingIndicator.defaultProps = defaultProps

export default LoadingIndicator

