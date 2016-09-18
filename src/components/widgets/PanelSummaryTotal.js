import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import PanelSummary from '../widgets/PanelSummary'
import PanelSummaryLoading from '../widgets/PanelSummaryLoading'
import { ICONS } from '../../constants'
import { numberUtil } from '../../utils'

const NAME = 'PanelSummaryTotal'

const propTypes = {
  domain: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

const defaultProps = {
  theme: 'info',
  onClick () {}
}

export class PanelSummaryTotal extends Component {
  changeRoute = () => {
    this.props.router.push('/' + this.props.route)
  }

  render () {
    const {summaries} = this.props.stores
    const {domain, route, theme, title} = this.props
    const {toCommaFormat} = numberUtil

    const total = summaries.data && summaries.data[route]

    if (summaries.isEmpty && summaries.isFetching) {
      return (
        <PanelSummaryLoading
          theme={theme}
          icon={ICONS[domain]}
          title={title}
          primary={'Loading...'}
          secondary={'total'}
        />
      )
    } else {
      return (
        <PanelSummary
          theme={theme}
          icon={ICONS[domain]}
          title={title}
          primary={toCommaFormat(total)}
          secondary={'total'}
          onClick={this.changeRoute}
        />
      )
    }
  }
}
PanelSummaryTotal.displayName = NAME
PanelSummaryTotal.propTypes = propTypes
PanelSummaryTotal.defaultProps = defaultProps

export default withRouter(observer(['stores'], PanelSummaryTotal))

