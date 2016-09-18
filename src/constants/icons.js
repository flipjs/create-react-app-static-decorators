export const addresses = 'fa fa-map-signs'
export const admin = 'fa fa-cog'
export const advisories = 'fa fa-newspaper-o'
export const advisoryCategories = 'fa fa-list'
export const campaigns = 'fa fa-star'
export const coas = 'fa fa-heartbeat'
export const cybox = 'fa fa-sitemap'
export const domainNames = 'fa fa-cubes'
export const exploitTargets = 'fa fa-bullseye'
export const generic = 'fa fa-bars'
export const home = 'fa fa-home'
export const incidents = 'fa fa-warning'
export const incidentCategories = 'fa fa-list'
export const indicators = 'fa fa-map-marker'
export const informationSources = 'fa fa-user'
export const intendedEffects = 'fa fa-flask'
export const search = 'fa fa-search'
export const statements = 'fa fa-bomb'
export const threatActors = 'fa fa-user-secret'
export const ttps = 'fa fa-gift'
export const users = 'fa fa-users'
export const vulnerabilities = 'fa fa-dot-circle-o'
export const zgtin = 'fa fa-globe'

export const spinner = 'fa fa-refresh'

export const panel = {
  add: 'fa fa-plus',
  dismiss: 'fa panel-action-dismiss',
  edit: 'fa fa-pencil',
  refresh: spinner,
  toggle: 'fa panel-action-toggle'
}

export const input = {
  default: zgtin,
  admin: admin,
  advisories: advisories,
  campaigns: campaigns,
  coas: coas,
  exploitTargets: exploitTargets,
  generic: generic,
  home: home,
  incidents: incidents,
  indicators: indicators,
  informationSources: informationSources,
  cybox: cybox,
  statements: statements,
  threatActors: threatActors,
  ttps: ttps,
  vulnerabilities: vulnerabilities
}

export const common = {
  buttons: {
    add: 'fa fa-plus',
    delete: 'fa fa-trash',
    edit: 'fa fa-pencil',
    submit: 'fa fa-send'
  },
  inputs: {
    motivation: 'fa fa-bullseye',
    sophistication: 'fa fa-diamond',
    planning_and_operational_support: 'fa fa-calendar-o',
    ID: 'fa fa-hashtag',
    id: 'fa fa-hashtag',
    address: 'fa fa-map-signs',
    affected_software: 'fa fa-files-o',
    author: 'fa fa-user',
    behaviours: 'fa fa-leaf',
    category: 'fa fa-tags',
    category_description: 'fa fa-align-justify',
    confidence: 'fa fa-tachometer',
    configuration: 'fa fa-gear',
    coordinator: 'fa fa-user',
    cost: 'fa fa-tachometer',
    cost_confidence: 'fa fa-signal',
    cost_confidence_description: 'fa fa-align-justify',
    cost_confidence_source: 'fa fa-user',
    cost_description: 'fa fa-align-justify',
    cost_source: 'fa fa-user',
    CVE: vulnerabilities,
    description: 'fa fa-align-justify',
    discovered_time: 'fa fa-clock-o',
    discovery_method: 'fa fa-eye',
    domain_name: 'fa fa-cube',
    effect: 'fa fa-bomb',
    efficacy: 'fa fa-tachometer',
    efficacy_confidence: 'fa fa-signal',
    efficacy_confidence_description: 'fa fa-align-justify',
    efficacy_confidence_source: 'fa fa-user',
    efficacy_description: 'fa fa-align-justify',
    efficacy_source: 'fa fa-user',
    email: 'fa fa-envelope',
    fullname: 'fa fa-bookmark',
    group: 'fa fa-users',
    identity: 'fa fa-info-circle',
    impact: 'fa fa-tachometer',
    impact_confidence: 'fa fa-signal',
    impact_confidence_description: 'fa fa-align-justify',
    impact_confidence_source: 'fa fa-user',
    impact_description: 'fa fa-align-justify',
    impact_source: 'fa fa-user',
    information_source: 'fa fa-user',
    intended_effect: 'fa fa-flask',
    is_destination: 'fa fa-question-circle',
    is_source: 'fa fa-question-circle',
    is_spoofed: 'fa fa-question-circle',
    names: 'fa fa-align-left',
    objective: 'fa fa-check-circle',
    password: 'fa fa-key',
    published_time: 'fa fa-clock-o',
    references: 'fa fa-book',
    reporter: 'fa fa-user',
    resources: 'fa fa-database',
    responder: 'fa fa-user',
    security_compromise: 'fa fa-unlock-alt',
    short_description: 'fa fa-bars',
    source: 'fa fa-user',
    stage: 'fa fa-signal',
    status: 'fa fa-adjust',
    structured_COA: 'fa fa-map',
    structured_coa: 'fa fa-map',
    title: 'fa fa-bookmark',
    type: 'fa fa-tags',
    type_description: 'fa fa-align-justify',
    username: 'fa fa-user',
    value: generic,
    victim: 'fa fa-crosshairs',
    victim_targeting: 'fa fa-crosshairs',
    vlan_name: 'fa fa-cubes',
    vlan_num: 'fa fa-cubes',
    weakness: 'fa fa-unlink',
    updated_at: 'fa fa-clock-o'
  }
}

export const domains = {
  advisories: {
    inputs: {
      default: advisories,
      category: common.inputs.category,
      description: common.inputs.description,
      short_description: common.inputs.short_description,
      title: common.inputs.title
    }
  },

  campaigns: {
    inputs: {
      default: campaigns,
      confidence: common.inputs.confidence,
      description: common.inputs.description,
      effect: common.inputs.effect,
      information_source: common.inputs.information_source,
      short_description: common.inputs.short_description,
      status: common.inputs.status,
      title: common.inputs.title
    }
  },

  coas: {
    inputs: {
      cost: common.inputs.cost,
      description: common.inputs.description,
      efficacy: common.inputs.efficacy,
      impact: common.inputs.impact,
      information_source: common.inputs.information_source,
      objective: common.inputs.objective,
      short_description: common.inputs.short_description,
      stage: common.inputs.stage,
      title: common.inputs.title,
      type: common.inputs.type
    }
  },

  addresses: {
    inputs: {
      default: addresses,
      address: common.inputs.address,
      category: common.inputs.category,
      is_destination: common.inputs.is_destination,
      is_source: common.inputs.is_source,
      is_spoofed: common.inputs.is_spoofed,
      vlan_name: common.inputs.vlan_name,
      vlan_num: common.inputs.vlan_num
    }
  },

  domainNames: {
    inputs: {
      default: domainNames,
      type: common.inputs.type,
      domain_name: common.inputs.domain_name
    }
  },

  exploitTargets: {
    inputs: {
      default: exploitTargets,
      title: common.inputs.title,
      short_description: common.inputs.short_description,
      description: common.inputs.description,
      configuration: common.inputs.configuration,
      names: common.inputs.names,
      weakness: common.inputs.weakness,
      information_source: common.inputs.information_source
    }
  },

  incidents: {
    inputs: {
      default: incidents,
      title: common.inputs.title,
      short_description: common.inputs.short_description,
      description: common.inputs.description,
      category: common.inputs.category,
      confidence: common.inputs.confidence,
      coordinator: common.inputs.coordinator,
      discovery_method: common.inputs.discovery_method,
      information_source: common.inputs.information_source,
      reporter: common.inputs.reporter,
      responder: common.inputs.responder,
      security_compromise: common.inputs.security_compromise,
      status: common.inputs.status,
      victim: common.inputs.victim
    }
  },

  indicators: {
    inputs: {
      default: indicators,
      confidence: common.inputs.confidence,
      description: common.inputs.description,
      information_source: common.inputs.information_source,
      short_description: common.inputs.short_description,
      title: common.inputs.title
    }
  },

  intendedEffects: {
    inputs: {
      default: intendedEffects,
      confidence: common.inputs.confidence,
      description: common.inputs.description,
      information_source: common.inputs.information_source,
      intended_effect: common.inputs.intended_effect
    }
  },

  threatActors: {
    inputs: {
      default: threatActors,
      title: common.inputs.title,
      short_description: common.inputs.short_description,
      description: common.inputs.description,
      confidence: common.inputs.confidence_value,
      type: common.inputs.type,
      motivation: common.inputs.motivation,
      sophistication: common.inputs.sophistication,
      planning_and_operational_support: common.inputs.planning_and_operational_support,
      information_source: common.inputs.information_source_identity
    }
  },

  ttps: {
    inputs: {
      default: ttps,
      title: common.inputs.title,
      short_description: common.inputs.short_description,
      description: common.inputs.description,
      behaviours: common.inputs.behaviours,
      victim_targeting: common.inputs.victim_targeting,
      resources: common.inputs.resources,
      information_source: common.inputs.information_source
    }
  },

  users: {
    inputs: {
      default: users,
      username: common.inputs.username,
      fullname: common.inputs.fullname,
      email: common.inputs.email,
      password: common.inputs.password,
      group: common.inputs.group
    }
  },

  vulnerabilities: {
    inputs: {
      default: vulnerabilities,
      CVE: common.inputs.CVE,
      title: common.inputs.title,
      short_description: common.inputs.short_description,
      description: common.inputs.description,
      affected_software: common.inputs.affected_software,
      references: common.inputs.references,
      discovered_time: common.inputs.discovered_time,
      published_time: common.inputs.published_time
    }
  }
}

