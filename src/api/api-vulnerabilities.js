import { Vulnerability } from '../stores/models'
import { ApiVulnerabilities } from './models'

const URL = 'vulnerabilities'

const apiVulnerabilities = new ApiVulnerabilities(Vulnerability, URL)

export default apiVulnerabilities

