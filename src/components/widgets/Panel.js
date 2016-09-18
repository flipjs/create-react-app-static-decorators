import React, { PropTypes } from 'react'

const NAME = 'Panel'

const propTypes = {
  id: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.any
}

const defaultProps = {
  theme: ''
}

export function Panel (props) {
  return (
    <section
      id={props.id}
      className={`panel ${props.theme ? 'panel-' + props.theme : ''}`}
    >
      {props.children}
    </section>
  )
}
Panel.displayName = NAME
Panel.propTypes = propTypes
Panel.defaultProps = defaultProps

export default Panel

