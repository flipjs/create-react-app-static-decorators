import { observable, action, computed } from 'mobx'

class Incident {
  id
  @observable category
  @observable category_id
  @observable confidence_id
  @observable confidence_value
  @observable coordinator
  @observable coordinator_id
  @observable description
  @observable discovery_method
  @observable discovery_method_id
  @observable display_name
  @observable information_source_id
  @observable information_source_identity
  @observable reporter
  @observable reporter_id
  @observable responder
  @observable responder_id
  @observable security_compromise
  @observable security_compromise_id
  @observable short_description
  @observable status
  @observable status_id
  @observable title
  @observable victim
  @observable updated_at

  constructor (incident) {
    Object.assign(this, incident)
  }

  @computed
  get isValid () {
    if (!this.title) return false
    if (!this.short_description) return false
    if (!this.description) return false
    return true
  }

  @action
  setState (state) {
    Object.assign(this, state)
  }

  toJS () {
    return {
      id: this.id,
      category: this.category,
      category_id: this.category_id,
      confidence_id: this.confidence_id,
      confidence_value: this.confidence_value,
      coordinator: this.coordinator,
      coordinator_id: this.coordinator_id,
      description: this.description,
      discovery_method: this.discovery_method,
      discovery_method_id: this.discovery_method_id,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      reporter: this.reporter,
      reporter_id: this.reporter_id,
      responder: this.responder,
      responder_id: this.responder_id,
      security_compromise: this.security_compromise,
      security_compromise_id: this.security_compromise_id,
      short_description: this.short_description,
      status: this.status,
      status_id: this.status_id,
      title: this.title,
      victim: this.victim,
      updated_at: this.updated_at
    }
  }

  toPostApi () {
    return {
      category: this.category,
      category_id: this.category_id,
      confidence_id: this.confidence_id,
      confidence_value: this.confidence_value,
      coordinator: this.coordinator,
      coordinator_id: this.coordinator_id,
      description: this.description,
      discovery_method: this.discovery_method,
      discovery_method_id: this.discovery_method_id,
      display_name: this.display_name,
      information_source_id: this.information_source_id,
      information_source_identity: this.information_source_identity,
      reporter: this.reporter,
      reporter_id: this.reporter_id,
      responder: this.responder,
      responder_id: this.responder_id,
      security_compromise: this.security_compromise,
      security_compromise_id: this.security_compromise_id,
      short_description: this.short_description,
      status: this.status,
      status_id: this.status_id,
      title: this.title,
      victim: this.victim
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
      title: this.title,
      short_description: this.short_description,
      description: this.description,
      category: this.category,
      confidence: this.confidence_value,
      coordinator: this.coordinator,
      discovery_method: this.discovery_method,
      information_source: this.information_source_identity,
      reporter: this.reporter,
      responder: this.responder,
      security_compromise: this.security_compromise,
      status: this.status,
      victim: this.victim,
      updated_at: this.updated_at
    }
  }

  static fromJS (incident) {
    return new Incident(incident)
  }
}

export default Incident

