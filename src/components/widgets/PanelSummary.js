import React, { Component, PropTypes } from 'react'

const NAME = 'PanelSummary'

const styles = {
  cursor: {
    cursor: 'pointer'
  }
}

const propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
}

const defaultProps = {
  theme: 'info',
  onClick () {}
}

export class PanelSummary extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.onClick()
  }

  render () {
    return (
      <section
        className={[
          'panel',
          'panel-featured-left',
          'panel-featured-' + this.props.theme
        ].join(' ')}
      >
        <div className='panel-body pt-lg'>
          <div className='widget-summary'>
            <div className='widget-summary-col widget-summary-col-icon'>
              <div
                className={[
                  'summary-icon',
                  'bg-' + this.props.theme
                ].join(' ')}
              >
                <i className={this.props.icon}></i>
              </div>
            </div>
            <div className='widget-summary-col'>
              <div className='summary'>
                <h4 className='title'>{this.props.title}</h4>
                <div className='info'>
                  <strong className='amount'>{this.props.primary}</strong>
                  <p
                    className={'text-' + this.props.theme}
                  >
                    {this.props.secondary}
                  </p>
                </div>
              </div>
              <div className='summary-footer'>
                <a
                  className='text-muted text-uppercase'
                  style={styles.cursor}
                  onClick={this.handleClick}
                >
                  (view all)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
PanelSummary.displayName = NAME
PanelSummary.propTypes = propTypes
PanelSummary.defaultProps = defaultProps

export default PanelSummary

