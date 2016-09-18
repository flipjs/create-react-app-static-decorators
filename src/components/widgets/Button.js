import React, { PropTypes } from 'react'

const NAME = 'Button'

const propTypes = {
  theme: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

const defaultProps = {
  theme: 'primary',
  icon: '',
  title: 'Submit',
  disabled: false
}

function handleClick (props) {
  return (e) => {
    e.preventDefault()
    props.onClick()
  }
}

export function Button (props) {
  return (
    <button
      className={props.theme ? 'btn btn-' + props.theme : 'btn'}
      onClick={handleClick(props)}
      disabled={props.disabled}
    >
      {props.icon && <i className={props.icon}></i>}
      {' '}
      {props.title}
    </button>
  )
}
Button.displayName = NAME
Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

