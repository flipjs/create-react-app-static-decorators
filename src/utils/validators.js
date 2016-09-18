/* eslint-disable max-len */
/* eslint-disable no-useless-escape */

const regexipv4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/

const regexipv4cidr = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$/

const regexipv6 = /^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*/

const regexipv6cidr = /^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*(\/(d|dd|1[0-1]d|12[0-8]))$/

const regexdomain = /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,6})$/

const regexhostname = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z]|[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9])$/

const regexsubplusdomain = /^([a-z0-9|-]+\.)*[a-z0-9|-]+\.[a-z]+$/

const regexemail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

const regexcve = /^(CVE-(1999|2\d{3})-(0\d{2}[1-9]|[1-9]\d{3,}))$/

const regexurl = new RegExp(
  '^' +
    // protocol identifier
    '(?:(?:https?|ftp)://)' +
    // user:pass authentication
    '(?:\\S+(?::\\S*)?@)?' +
    '(?:' +
      // IP address exclusion
      // private & local networks
      '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
      '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
      '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
      '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
      '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    '|' +
      // host name
      '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
      // domain name
      '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
      // TLD identifier
      '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
      // TLD may end with dot
      '\\.?' +
    ')' +
    // port number
    '(?::\\d{2,5})?' +
    // resource path
    '(?:[/?#]\\S*)?' +
  '$', 'i'
)

const isEmpty = (value) => {
  return value === undefined || value === null || value === ''
}

const join = (rules) => (value, data) => {
  return rules.map((rule) => rule(value, data)).filter((error) => !!error)[0]
}

export const email = (value) => {
  if (!isEmpty(value) && !regexemail.test(value)) {
    return 'Invalid email address'
  }
}

export const ipaddress = (value) => {
  if (!isEmpty(value) && !regexipv4.test(value)) {
    return 'Invalid ip address'
  }
}

export const ipv6 = (value) => {
  if (!isEmpty(value) && !regexipv6.test(value)) {
    return 'Invalid ip address'
  }
}

export const netblock = (value) => {
  if (!isEmpty(value) && !regexipv4cidr.test(value)) {
    return 'Invalid netblock'
  }
}

export const netblockcidr = (value) => {
  if (!isEmpty(value) && !regexipv6cidr.test(value)) {
    return 'Invalid netblock'
  }
}

export const domain = (value) => {
  if (!isEmpty(value) && !regexdomain.test(value)) {
    return 'Invalid domain'
  }
}

export const hostname = (value) => {
  if (!isEmpty(value) && !regexhostname.test(value)) {
    return 'Invalid hostname'
  }
}

export const subplusdomain = (value) => {
  if (!isEmpty(value) && !regexsubplusdomain.test(value)) {
    return 'Invalid domain'
  }
}
export const cve = (value) => {
  if (!isEmpty(value) && !regexcve.test(value)) {
    return 'Invalid cve'
  }
}

export const link = (value) => {
  if (!isEmpty(value) && !regexurl.test(value)) {
    return 'Invalid url'
  }
}

export const required = (value) => {
  if (isEmpty(value)) {
    return 'Field is required'
  }
}

export const minLength = (min) => {
  return (value) => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`
    }
  }
}

export const maxLength = (max) => {
  return (value) => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`
    }
  }
}

export const minValue = (min) => {
  return (value) => {
    if (!isEmpty(value) && value < min) {
      return `Minimum value is ${min}`
    }
  }
}

export const maxValue = (max) => {
  return (value) => {
    if (!isEmpty(value) && value > max) {
      return `Maximum value is ${max}`
    }
  }
}

export const integer = (value) => {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer'
  }
}

export const oneOf = (enumeration) => {
  return (value) => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`
    }
  }
}

export const match = (field) => {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match'
      }
    }
  }
}

export const createValidator = (rules) => {
  return (data = {}) => {
    const errors = {}
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])) // concat enables both functions and arrays of functions
      const error = rule(data[key], data)
      if (error) {
        errors[key] = error
      }
    })
    return errors
  }
}
