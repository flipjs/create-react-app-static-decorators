import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PanelTitle from './PanelTitle'

const NAME = 'PanelHeader'

const propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  center: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

const defaultProps = {
  link: '',
  color: 'primary',
  center: false,
  icon: '',
  title: ''
}

export function PanelHeader (props) {
  return (
    <header className='panel-heading bg-white'>
      {props.children}
      {props.link ? (
        <Link to={props.link}>
          <PanelTitle {...props} />
        </Link>
      ) : (
        <PanelTitle {...props} />
      )}
    </header>
  )
}
PanelHeader.displayName = NAME
PanelHeader.propTypes = propTypes
PanelHeader.defaultProps = defaultProps

export default PanelHeader

