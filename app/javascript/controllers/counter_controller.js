import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Counter Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  step(event) {
    event.preventDefault()
    this.stimulate('Counter#step')
  }
}
