import React, { PropTypes } from 'react'
import classNames from 'classnames'

const NAME = 'PanelTitle'

const panelTitle = props =>
  classNames({
    'panel-title': true,
    'text-center': props.center,
    [`text-${props.color}`]: !!props.color
  })

const propTypes = {
  color: PropTypes.string.isRequired,
  center: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const defaultProps = {
  color: 'primary',
  center: false,
  icon: '',
  title: ''
}

export function PanelTitle (props) {
  return (
    <h2 className={panelTitle(props)}>
      <i className={props.icon}></i>
      {' '}
      {props.title}
    </h2>
  )
}
PanelTitle.displayName = NAME
PanelTitle.propTypes = propTypes
PanelTitle.defaultProps = defaultProps

export default PanelTitle

