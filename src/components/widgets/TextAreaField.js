import React, { Component, PropTypes } from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { ICONS } from '../../constants'

const NAME = 'TextAreaField'

const propTypes = {
  model: PropTypes.object.isRequired,
  validators: PropTypes.array.isRequired,
  titleWidth: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
}

const defaultProps = {
  validators: [],
  titleWidth: 10,
  icon: ICONS.domains.campaigns.inputs.default,
  type: 'text',
  disabled: false
}

export class TextAreaField extends Component {
  @observable errors = []
  @observable feedbackClass = ''

  @computed
  get isValid () {
    return !this.errors.length
  }

  @action
  handleChange = (e) => {
    const input = e.target.value
    this.errors.clear()
    this.props.validators.forEach(fun => {
      const message = fun(input)
      if (message) this.errors.push(message)
    })

    if (this.isValid) {
      this.feedbackClass = 'has-success'
      this.props.model[this.props.name] = input
    } else {
      this.feedbackClass = 'has-error'
      this.props.model[this.props.name] = ''
    }
  }

  render () {
    return (
      <div className={['form-group', this.feedbackClass].join(' ')}>
        <div className='input-group'>
          <span className='input-group-addon' style={{minWidth: this.props.titleWidth, textAlign: 'left'}}>
            <i className={this.props.icon}></i>
            {' '}
            {this.props.title}
          </span>
          <textarea
            onChange={this.handleChange}
            onBlur={this.handleChange}
            rows={this.props.rows}
            name={this.props.name}
            defaultValue={this.props.model[this.props.name]}
            className='form-control'
            disabled={this.props.disabled}
          />
        </div>
        {!this.isValid ? (
          // show first error message only
          <label className='error' htmlFor={this.props.name}>{this.errors[0]}</label>
        ) : null}
      </div>
    )
  }
}
TextAreaField.displayName = NAME
TextAreaField.propTypes = propTypes
TextAreaField.defaultProps = defaultProps

export default observer(TextAreaField)

