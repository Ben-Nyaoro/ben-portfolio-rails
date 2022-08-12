import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="headerdropdown"
export default class extends Controller {

	static targets = [ "uxwork", "webdevwork" ]

  connect() {
		console.log("headerdropdown connected to Stimulus");
  }
}
