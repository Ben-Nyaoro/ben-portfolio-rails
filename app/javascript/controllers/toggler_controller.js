import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="Toggler"
export default class extends Controller {

	static targets = ["navicon"]

  connect() {
		console.log("Toggler connected to Stimulus");
		console.log(this.naviconTarget);
		console.log("menuToggle");
		// console.log(this.element);
  }

	menuToggle() {
		if (this.naviconTarget.classList.contains("navtoggle")) {
			this.naviconTarget.classList.add("responsive");
		}
	}
}
