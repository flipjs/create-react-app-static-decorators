import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from '../components/layouts/CoreLayout'

import Page404View from '../components/views/Page404View'
import AdvisoriesView from '../components/views/AdvisoriesView'
import AdvisoryRecordView from '../components/views/AdvisoryRecordView'
import AdvisoryEditFormView from '../components/views/AdvisoryEditFormView'
import AdvisoryFormView from '../components/views/AdvisoryFormView'
import AdvisoryCategoriesView from '../components/views/AdvisoryCategoriesView'
import AdvisoryCategoryRecordView from '../components/views/AdvisoryCategoryRecordView'
import AdvisoryCategoryEditFormView from '../components/views/AdvisoryCategoryEditFormView'
import AdvisoryCategoryFormView from '../components/views/AdvisoryCategoryFormView'
import CampaignsView from '../components/views/CampaignsView'
import CampaignRecordView from '../components/views/CampaignRecordView'
import CampaignEditFormView from '../components/views/CampaignEditFormView'
import CampaignFormView from '../components/views/CampaignFormView'
import CoasView from '../components/views/CoasView'
import CoaRecordView from '../components/views/CoaRecordView'
import CoaEditFormView from '../components/views/CoaEditFormView'
import CoaFormView from '../components/views/CoaFormView'
import AddressesView from '../components/views/AddressesView'
import AddressRecordView from '../components/views/AddressRecordView'
import AddressEditFormView from '../components/views/AddressEditFormView'
import AddressFormView from '../components/views/AddressFormView'
import DomainNamesView from '../components/views/DomainNamesView'
import DomainNameRecordView from '../components/views/DomainNameRecordView'
import DomainNameEditFormView from '../components/views/DomainNameEditFormView'
import DomainNameFormView from '../components/views/DomainNameFormView'
import ExploitTargetsView from '../components/views/ExploitTargetsView'
import ExploitTargetRecordView from '../components/views/ExploitTargetRecordView'
import ExploitTargetEditFormView from '../components/views/ExploitTargetEditFormView'
import ExploitTargetFormView from '../components/views/ExploitTargetFormView'
import HomeView from '../components/views/HomeView'
import IncidentsView from '../components/views/IncidentsView'
import IncidentRecordView from '../components/views/IncidentRecordView'
import IncidentEditFormView from '../components/views/IncidentEditFormView'
import IncidentFormView from '../components/views/IncidentFormView'
import IndicatorsView from '../components/views/IndicatorsView'
import IndicatorRecordView from '../components/views/IndicatorRecordView'
import IndicatorEditFormView from '../components/views/IndicatorEditFormView'
import IndicatorFormView from '../components/views/IndicatorFormView'
import IntendedEffectsView from '../components/views/IntendedEffectsView'
import IntendedEffectRecordView from '../components/views/IntendedEffectRecordView'
import IntendedEffectEditFormView from '../components/views/IntendedEffectEditFormView'
import IntendedEffectFormView from '../components/views/IntendedEffectFormView'
import ObservablesView from '../components/views/ObservablesView'
import ObservableRecordView from '../components/views/ObservableRecordView'
import ObservableEditFormView from '../components/views/ObservableEditFormView'
import ObservableFormView from '../components/views/ObservableFormView'
import LoginView from '../components/views/LoginView'
import LogoutView from '../components/views/LogoutView'
import SearchView from '../components/views/SearchView'
import ThreatActorsView from '../components/views/ThreatActorsView'
import ThreatActorRecordView from '../components/views/ThreatActorRecordView'
import ThreatActorEditFormView from '../components/views/ThreatActorEditFormView'
import ThreatActorFormView from '../components/views/ThreatActorFormView'
import TtpsView from '../components/views/TtpsView'
import TtpRecordView from '../components/views/TtpRecordView'
import TtpEditFormView from '../components/views/TtpEditFormView'
import TtpFormView from '../components/views/TtpFormView'
import UsersView from '../components/views/UsersView'
import UserRecordView from '../components/views/UserRecordView'
import UserEditFormView from '../components/views/UserEditFormView'
import UserFormView from '../components/views/UserFormView'
import VulnerabilitiesView from '../components/views/VulnerabilitiesView'
import VulnerabilityRecordView from '../components/views/VulnerabilityRecordView'
import VulnerabilityEditFormView from '../components/views/VulnerabilityEditFormView'
import VulnerabilityFormView from '../components/views/VulnerabilityFormView'

import { requiresAuth, requiresAdmin } from '../decorators'
import {
  addresses,
  advisories,
  advisoryCategories,
  campaignStatuses,
  campaigns,
  coaCosts,
  coaEfficacies,
  coaImpacts,
  coaStages,
  coaTypes,
  coas,
  confidences,
  domainNames,
  exploitTargets,
  incidents,
  indicators,
  informationSources,
  intendedEffects,
  observables,
  summaries,
  threatActors,
  ttps,
  ui,
  users,
  vulnerabilities
} from '../stores'

function loadData (...stores) {
  stores.forEach(store => store.fetchAllAsNeeded())
}

function init (route) {
  return () => {
    switch (route) {
      case '404':
        ui.setNavPath('404')
        break

      case 'addresses':
        /* fall through */
      case 'addresses/edit':
        /* fall through */
      case 'addresses/new':
        ui.setNavPath('addresses')
        return loadData(
          addresses,
          summaries
        )

      case 'advisories':
        /* fall through */
      case 'advisories/edit':
        /* fall through */
      case 'advisories/new':
        ui.setNavPath('advisories')
        return loadData(
          advisories,
          summaries
        )

      case 'advisory_categories':
        /* fall through */
      case 'advisory_categories/edit':
        /* fall through */
      case 'advisory_categories/new':
        ui.setNavPath('advisory_categories')
        return loadData(
          advisoryCategories,
          summaries
        )

      case 'campaigns':
        /* fall through */
      case 'campaigns/edit':
        /* fall through */
      case 'campaigns/new':
        ui.setNavPath('campaigns')
        return loadData(
          campaigns,
          campaignStatuses,
          confidences,
          informationSources,
          summaries
        )

      case 'coas':
        /* fall through */
      case 'coas/edit':
        /* fall through */
      case 'coas/new':
        ui.setNavPath('coas')
        return loadData(
          coaCosts,
          coaEfficacies,
          coaImpacts,
          coaStages,
          coaTypes,
          coas,
          informationSources,
          summaries
        )

      case 'domain_names':
        /* fall through */
      case 'domain_names/edit':
        /* fall through */
      case 'domain_names/new':
        ui.setNavPath('domain_names')
        return loadData(
          domainNames,
          summaries
        )

      case 'exploit_targets':
        /* fall through */
      case 'exploit_targets/edit':
        /* fall through */
      case 'exploit_targets/new':
        ui.setNavPath('exploit_targets')
        return loadData(
          exploitTargets,
          summaries
        )

      case 'home':
        ui.setNavPath('home')
        return loadData(
          advisories,
          campaigns,
          incidents,
          threatActors,
          summaries
        )

      case 'incidents':
        /* fall through */
      case 'incidents/edit':
        /* fall through */
      case 'incidents/new':
        ui.setNavPath('incidents')
        return loadData(
          incidents,
          summaries
        )

      case 'indicators':
        /* fall through */
      case 'indicators/edit':
        /* fall through */
      case 'indicators/new':
        ui.setNavPath('indicators')
        return loadData(
          indicators,
          summaries
        )

      case 'intended_effects':
        /* fall through */
      case 'intended_effects/edit':
        /* fall through */
      case 'intended_effects/new':
        ui.setNavPath('intended_effects')
        return loadData(
          intendedEffects,
          summaries
        )

      case 'observables':
        /* fall through */
      case 'observables/edit':
        /* fall through */
      case 'observables/new':
        ui.setNavPath('observables')
        return loadData(
          observables,
          summaries
        )

      case 'search':
        ui.setNavPath('search')
        break

      case 'threat_actors':
        /* fall through */
      case 'threat_actors/edit':
        /* fall through */
      case 'threat_actors/new':
        ui.setNavPath('threat_actors')
        return loadData(
          threatActors,
          summaries
        )

      case 'ttps':
        /* fall through */
      case 'ttps/edit':
        /* fall through */
      case 'ttps/new':
        ui.setNavPath('ttps')
        return loadData(
          ttps,
          summaries
        )

      case 'users':
        /* fall through */
      case 'users/edit':
        /* fall through */
      case 'users/new':
        ui.setNavPath('users')
        return loadData(
          users,
          summaries
        )

      case 'vulnerabilities':
        /* fall through */
      case 'vulnerabilities/edit':
        /* fall through */
      case 'vulnerabilities/new':
        ui.setNavPath('vulnerabilities')
        return loadData(
          vulnerabilities,
          summaries
        )
    }
  }
}

export default () => (
  <Route path=''>

    <Route path='/login' component={LoginView} />
    <Route path='/logout' component={LogoutView} />

    <Route path='/' component={CoreLayout}>
      <IndexRoute
        onEnter={init('home')}
        component={requiresAuth(HomeView)}
      />

      <Route
        path='404'
        onEnter={init('404')}
        component={requiresAuth(Page404View)}
      />

      <Route path='addresses'>
        <IndexRoute
          onEnter={init('addresses')}
          component={requiresAuth(AddressesView)}
        />
        <Route
          path='edit'
          onEnter={init('addresses/edit')}
          component={requiresAuth(AddressEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('addresses/new')}
          component={requiresAuth(AddressFormView)}
        />
        <Route
          path=':id'
          onEnter={init('addresses')}
          component={requiresAuth(AddressRecordView)}
        />
      </Route>

      <Route path='advisories'>
        <IndexRoute
          onEnter={init('advisories')}
          component={requiresAuth(AdvisoriesView)}
        />
        <Route
          path='edit'
          onEnter={init('advisories/edit')}
          component={requiresAuth(AdvisoryEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('advisories/new')}
          component={requiresAuth(AdvisoryFormView)}
        />
        <Route
          path=':id'
          onEnter={init('advisories')}
          component={requiresAuth(AdvisoryRecordView)}
        />
      </Route>

      <Route path='advisory_categories'>
        <IndexRoute
          onEnter={init('advisory_categories')}
          component={requiresAuth(AdvisoryCategoriesView)}
        />
        <Route
          path='edit'
          onEnter={init('advisory_categories/edit')}
          component={requiresAuth(AdvisoryCategoryEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('advisory_categories/new')}
          component={requiresAuth(AdvisoryCategoryFormView)}
        />
        <Route
          path=':id'
          onEnter={init('advisory_categories')}
          component={requiresAuth(AdvisoryCategoryRecordView)}
        />
      </Route>

      <Route path='campaigns'>
        <IndexRoute
          onEnter={init('campaigns')}
          component={requiresAuth(CampaignsView)}
        />
        <Route
          path='edit'
          onEnter={init('campaigns/edit')}
          component={requiresAuth(CampaignEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('campaigns/new')}
          component={requiresAuth(CampaignFormView)}
        />
        <Route
          path=':id'
          onEnter={init('campaigns')}
          component={requiresAuth(CampaignRecordView)}
        />
      </Route>

      <Route path='coas'>
        <IndexRoute
          onEnter={init('coas')}
          component={requiresAuth(CoasView)}
        />
        <Route
          path='edit'
          onEnter={init('coas/edit')}
          component={requiresAuth(CoaEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('coas/new')}
          component={requiresAuth(CoaFormView)}
        />
        <Route
          path=':id'
          onEnter={init('coas')}
          component={requiresAuth(CoaRecordView)}
        />
      </Route>

      <Route path='domain_names'>
        <IndexRoute
          onEnter={init('domain_names')}
          component={requiresAuth(DomainNamesView)}
        />
        <Route
          path='edit'
          onEnter={init('domain_names/edit')}
          component={requiresAuth(DomainNameEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('domain_names/new')}
          component={requiresAuth(DomainNameFormView)}
        />
        <Route
          path=':id'
          onEnter={init('domain_names')}
          component={requiresAuth(DomainNameRecordView)}
        />
      </Route>

      <Route path='exploit_targets'>
        <IndexRoute
          onEnter={init('exploit_targets')}
          component={requiresAuth(ExploitTargetsView)}
        />
        <Route
          path='edit'
          onEnter={init('exploit_targets/edit')}
          component={requiresAuth(ExploitTargetEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('exploit_targets/new')}
          component={requiresAuth(ExploitTargetFormView)}
        />
        <Route
          path=':id'
          onEnter={init('exploit_targets')}
          component={requiresAuth(ExploitTargetRecordView)}
        />
      </Route>

      <Route
        path='home'
        onEnter={init('home')}
        component={requiresAuth(HomeView)}
      />

      <Route path='incidents'>
        <IndexRoute
          onEnter={init('incidents')}
          component={requiresAuth(IncidentsView)}
        />
        <Route
          path='edit'
          onEnter={init('incidents/edit')}
          component={requiresAuth(IncidentEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('incidents/new')}
          component={requiresAuth(IncidentFormView)}
        />
        <Route
          path=':id'
          onEnter={init('incidents')}
          component={requiresAuth(IncidentRecordView)}
        />
      </Route>

      <Route path='indicators'>
        <IndexRoute
          onEnter={init('indicators')}
          component={requiresAuth(IndicatorsView)}
        />
        <Route
          path='edit'
          onEnter={init('indicators/edit')}
          component={requiresAuth(IndicatorEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('indicators/new')}
          component={requiresAuth(IndicatorFormView)}
        />
        <Route
          path=':id'
          onEnter={init('indicators')}
          component={requiresAuth(IndicatorRecordView)}
        />
      </Route>

      <Route path='intended_effects'>
        <IndexRoute
          onEnter={init('intended_effects')}
          component={requiresAuth(IntendedEffectsView)}
        />
        <Route
          path='edit'
          onEnter={init('intended_effects/edit')}
          component={requiresAuth(IntendedEffectEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('intended_effects/new')}
          component={requiresAuth(IntendedEffectFormView)}
        />
        <Route
          path=':id'
          onEnter={init('intended_effects')}
          component={requiresAuth(IntendedEffectRecordView)}
        />
      </Route>

      <Route path='observables'>
        <IndexRoute
          onEnter={init('observables')}
          component={requiresAuth(ObservablesView)}
        />
        <Route
          path='edit'
          onEnter={init('observables/edit')}
          component={requiresAuth(ObservableEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('observables/new')}
          component={requiresAuth(ObservableFormView)}
        />
        <Route
          path=':id'
          onEnter={init('observables')}
          component={requiresAuth(ObservableRecordView)}
        />
      </Route>

      <Route
        path='search'
        onEnter={init('search')}
        component={requiresAuth(SearchView)}
      />

      <Route path='threat_actors'>
        <IndexRoute
          onEnter={init('threat_actors')}
          component={requiresAuth(ThreatActorsView)}
        />
        <Route
          path='edit'
          onEnter={init('threat_actors/edit')}
          component={requiresAuth(ThreatActorEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('threat_actors/new')}
          component={requiresAuth(ThreatActorFormView)}
        />
        <Route
          path=':id'
          onEnter={init('threat_actors')}
          component={requiresAuth(ThreatActorRecordView)}
        />
      </Route>

      <Route path='ttps'>
        <IndexRoute
          onEnter={init('ttps')}
          component={requiresAuth(TtpsView)}
        />
        <Route
          path='edit'
          onEnter={init('ttps/edit')}
          component={requiresAuth(TtpEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('ttps/new')}
          component={requiresAuth(TtpFormView)}
        />
        <Route
          path=':id'
          onEnter={init('ttps')}
          component={requiresAuth(TtpRecordView)}
        />
      </Route>

      <Route path='users'>
        <IndexRoute
          onEnter={init('users')}
          component={requiresAdmin(requiresAuth(UsersView))}
        />
        <Route
          path='edit'
          onEnter={init('users/edit')}
          component={requiresAdmin(requiresAuth(UserEditFormView))}
        />
        <Route
          path='new'
          onEnter={init('users/new')}
          component={requiresAdmin(requiresAuth(UserFormView))}
        />
        <Route
          path=':id'
          onEnter={init('users')}
          component={requiresAdmin(requiresAuth(UserRecordView))}
        />
      </Route>

      <Route path='vulnerabilities'>
        <IndexRoute
          onEnter={init('vulnerabilities')}
          component={requiresAuth(VulnerabilitiesView)}
        />
        <Route
          path='edit'
          onEnter={init('vulnerabilities/edit')}
          component={requiresAuth(VulnerabilityEditFormView)}
        />
        <Route
          path='new'
          onEnter={init('vulnerabilities/new')}
          component={requiresAuth(VulnerabilityFormView)}
        />
        <Route
          path=':id'
          onEnter={init('vulnerabilities')}
          component={requiresAuth(VulnerabilityRecordView)}
        />
      </Route>

    </Route>

    <Redirect from='*' to='/login' />

  </Route>
)

