import ui from './ui'

import {
  Advisories,
  Campaigns,
  Coas,
  ExploitTargets,
  Incidents,
  ThreatActors,
  Ttps,
  Vulnerabilities,
  Addresses,
  DomainNames
} from './collections'
import {
  Advisory,
  Campaign,
  Coa,
  ExploitTarget,
  Incident,
  ThreatActor,
  Ttp,
  Vulnerability,
  Address,
  DomainName
} from './models'
import {
  ApiAdvisories,
  ApiCampaigns,
  ApiCoas,
  ApiExploitTargets,
  ApiIncidents,
  ApiThreatActors,
  ApiTtps,
  ApiVulnerabilities,
  ApiAddresses,
  ApiDomainNames
} from '../api/models'

const advisoriesUrl = 'advisories'
const apiAdvisories = new ApiAdvisories(Advisory, advisoriesUrl)
const advisories = new Advisories(apiAdvisories, ui)

const campaignsUrl = 'campaigns'
const apiCampaigns = new ApiCampaigns(Campaign, campaignsUrl)
const campaigns = new Campaigns(apiCampaigns, ui)

const coasUrl = 'coas'
const apiCoas = new ApiCoas(Coa, coasUrl)
const coas = new Coas(apiCoas, ui)

const exploitTargetsUrl = 'exploit_targets'
const apiExploitTargets = new ApiExploitTargets(ExploitTarget, exploitTargetsUrl)
const exploitTargets = new ExploitTargets(apiExploitTargets, ui)

const incidentsUrl = 'incidents'
const apiIncidents = new ApiIncidents(Incident, incidentsUrl)
const incidents = new Incidents(apiIncidents, ui)

const threatActorsUrl = 'threat_actors'
const apiThreatActors = new ApiThreatActors(ThreatActor, threatActorsUrl)
const threatActors = new ThreatActors(apiThreatActors, ui)

const ttpsUrl = 'ttps'
const apiTtps = new ApiTtps(Ttp, ttpsUrl)
const ttps = new Ttps(apiTtps, ui)

const vulnerabilitiesUrl = 'vulnerabilities'
const apiVulnerabilities = new ApiVulnerabilities(Vulnerability, vulnerabilitiesUrl)
const vulnerabilities = new Vulnerabilities(apiVulnerabilities, ui)

const addressesUrl = 'addresses'
const apiAddresses = new ApiAddresses(Address, addressesUrl)
const addresses = new Addresses(apiAddresses, ui)

const domainNamesUrl = 'domain_names'
const apiDomainNames = new ApiDomainNames(DomainName, domainNamesUrl)
const domainNames = new DomainNames(apiDomainNames, ui)

const searches = {
  advisories,
  campaigns,
  coas,
  exploitTargets,
  incidents,
  threatActors,
  ttps,
  vulnerabilities,
  addresses,
  domainNames
}

export default searches

