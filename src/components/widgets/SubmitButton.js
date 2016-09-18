import React, { PropTypes } from 'react'

const NAME = 'SubmitButton'

const propTypes = {
  theme: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

const defaultProps = {
  theme: 'default',
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

export function SubmitButton (props) {
  return (
    <div className='form-group text-right mt-md'>
      <button
        className={props.theme ? 'btn btn-' + props.theme : 'btn'}
        onClick={handleClick(props)}
        disabled={props.disabled}
      >
        {props.icon && <i className={props.icon}></i>}
        {' '}
        {props.title}
      </button>
    </div>
  )
}
SubmitButton.displayName = NAME
SubmitButton.propTypes = propTypes
SubmitButton.defaultProps = defaultProps

export default SubmitButton

