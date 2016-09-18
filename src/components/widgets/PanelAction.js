import React, { Component, PropTypes } from 'react'

const NAME = 'PanelAction'

const styles = {
  cursor: {
    cursor: 'pointer'
  }
}

const propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}

const defaultProps = {
  onClick () {}
}

export class PanelAction extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick()
  }

  render () {
    return (
      <a
        className={`panel-action ${this.props.icon}`}
        style={styles.cursor}
        onClick={this.handleClick}
      >
      </a>
    )
  }
}
PanelAction.displayName = NAME
PanelAction.propTypes = propTypes
PanelAction.defaultProps = defaultProps

export default PanelAction

