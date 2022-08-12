import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filterwork"
export default class extends Controller {

	static targets = [ "uxwork", "webdevwork", "uxworktitle", "webdevworktitle" ]

  connect() {
		console.log("filterwork connected to Stimulus");
  }

		// Show all work
	showAll() {
		console.log("All works");
		this.uxworkTarget.classList.remove("d-none");
		this.webdevworkTarget.classList.remove("d-none");
		this.uxworktitleTarget.innerText = "All Work";
		this.webdevworktitleTarget.innerText = "";
	}

		// Filter UX work
	showUXWork() {
		console.log("UX works");
		this.uxworkTarget.classList.remove("d-none");
		this.webdevworkTarget.classList.add("d-none");
		this.uxworktitleTarget.innerText = "UX Work";
	}

		// Filter webdev work
	showWebDevWork() {
		console.log("Web Dev works");
		this.uxworkTarget.classList.add("d-none");
		this.webdevworkTarget.classList.remove("d-none");
		this.webdevworktitleTarget.innerText = "Web Dev Work";
	}

}
