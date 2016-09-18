import React, { Component, PropTypes } from 'react'
import { ICONS } from '../../constants'

const NAME = 'PanelActionToggle'

const styles = {
  cursor: {
    cursor: 'pointer'
  }
}

const propTypes = {
  panelId: PropTypes.string.isRequired
}

export class PanelActionToggle extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const element = document.getElementById(this.props.panelId)
    element.classList.toggle('panel-collapsed')
  }

  render () {
    return (
      <a
        className={`panel-action ${ICONS.panel.toggle}`}
        style={styles.cursor}
        onClick={this.handleClick}
      >
      </a>
    )
  }
}
PanelActionToggle.displayName = NAME
PanelActionToggle.propTypes = propTypes

export default PanelActionToggle

