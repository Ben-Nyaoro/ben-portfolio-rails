import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="Toggler"
export default class extends Controller {

	static targets = ["navicon"]

  connect() {
		console.log("Toggler connected to Stimulus");
  }

	menuToggleOpen() {
		this.naviconTarget.classList.toggle("responsive");
	}
}
