import React, { Component, PropTypes } from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { ICONS } from '../../constants'

const NAME = 'SelectField'

const propTypes = {
  returnField: PropTypes.string.isRequired,
  displayField: PropTypes.string.isRequired,
  model: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  validators: PropTypes.array.isRequired,
  titleWidth: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
}

const styles = {
  height: {
    height: 'auto'
  }
}

const defaultProps = {
  returnField: 'id',
  displayField: 'description',
  list: [],
  validators: [],
  titleWidth: 10,
  icon: ICONS.domains.campaigns.inputs.default,
  type: 'text',
  disabled: false
}

export class SelectField extends Component {
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
          <select
            onChange={this.handleChange}
            onBlur={this.handleChange}
            name={this.props.name}
            defaultValue={this.props.model[this.props.name]}
            className='form-control'
            style={styles.height}
            disabled={this.props.disabled}
          >
            <option value=''>{this.props.placeholder}</option>
            {this.props.list.map(item => (
              <option
                value={item[this.props.returnField]}
                key={item[this.props.returnField]}
              >
                {item[this.props.displayField]}
              </option>
            ))}
          </select>
        </div>
        {!this.isValid ? (
          // show first error message only
          <label className='error' htmlFor={this.props.name}>{this.errors[0]}</label>
        ) : null}
      </div>
    )
  }
}
SelectField.displayName = NAME
SelectField.propTypes = propTypes
SelectField.defaultProps = defaultProps

export default observer(SelectField)

