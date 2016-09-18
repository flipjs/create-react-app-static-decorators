import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import Button from '../widgets/Button'
import { ICONS } from '../../constants'
import { rbtUtil } from '../../utils'

const NAME = 'RecordInfo'

const propTypes = {
  router: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  showLink: PropTypes.bool.isRequired,
  record: PropTypes.object.isRequired
}

function formatKey (key) {
  const {inputs} = ICONS.common
  const text = key
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('\u00a0')
  return <strong><i className={inputs[key]}></i>{'\u00a0' + text}</strong>
}

function formatValue (value) {
  const SCORES = ['high', 'medium', 'low']
  if ((typeof value === 'string') && SCORES.includes(value.toLowerCase())) {
    return rbtUtil.toHmlLabel(value)
  }
  return value
}

export class RecordInfo extends Component {
  handleClick = () => {
    this.props.router.push(this.props.link)
  }

  render () {
    return (
      <div className='table-responsive'>
        <table className='table table-hover mb-none'>
          <tbody>
            {Object.keys(this.props.record).map(key => {
              return (
                <tr key={key}>
                  <td>{formatKey(key)}</td>
                  <td>{formatValue(this.props.record[key])}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {this.props.showLink &&
          <div className='text-right'>
            <Button
              theme='primary'
              icon='fa fa-info-circle'
              title='More Information'
              onClick={this.handleClick}
            />
          </div>
        }
      </div>
    )
  }
}
RecordInfo.displayName = NAME
RecordInfo.propTypes = propTypes

export default withRouter(RecordInfo)

