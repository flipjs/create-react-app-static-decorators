import { Vulnerabilities } from './collections'
import { apiVulnerabilities as api } from '../api'
import ui from './ui'

const vulnerabilities = new Vulnerabilities(api, ui)

export default vulnerabilities

