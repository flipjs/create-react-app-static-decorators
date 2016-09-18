import { observable, action, computed } from 'mobx'

class Address {
  id
  @observable address_value
  @observable category
  @observable display_name
  @observable is_destination
  @observable is_source
  @observable is_spoofed
  @observable vlan_name
  @observable vlan_num
  @observable updated_at

  constructor (address) {
    Object.assign(this, address)
  }

  @computed
  get isValid () {
    if (!this.address_value) return false
    if (!this.category) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      address_value: this.address_value,
      category: this.category,
      display_name: this.display_name,
      is_destination: this.is_destination,
      is_source: this.is_source,
      is_spoofed: this.is_spoofed,
      vlan_name: this.vlan_name,
      vlan_num: this.vlan_num,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      address_value: this.address_value,
      category: this.category,
      is_destination: this.is_destination,
      is_source: this.is_source,
      is_spoofed: this.is_spoofed
    }
  }

  toPutApi () {
    const record = this.toPostApi()
    record.id = this.id
    return record
  }

  toShow () {
    return {
      ID: this.id,
      address: this.address_value,
      category: this.category,
      is_destination: this.is_destination ? 'Yes' : 'No',
      is_source: this.is_source ? 'Yes' : 'No',
      is_spoofed: this.is_spoofed ? 'Yes' : 'No',
      vlan_name: this.vlan_name,
      vlan_num: this.vlan_num,
      updated_at: this.updated_at
    }
  }

  static fromJS (address) {
    return new Address(address)
  }
}

export default Address

