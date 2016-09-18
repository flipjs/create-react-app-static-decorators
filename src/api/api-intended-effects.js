import { IntendedEffect } from '../stores/models'
import { ApiIntendedEffects } from './models'

const URL = 'intended_effects'

const apiIntendedEffects = new ApiIntendedEffects(IntendedEffect, URL)

export default apiIntendedEffects

