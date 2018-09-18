function activateGallery() {
	// alert("Hello from the gallery file!");

let thumbnails = document.querySelectorAll("#gallery-thumbs img");
let thumbnailDivs = document.querySelectorAll("#gallery-thumbs div");
let mainImage = document.querySelector("#gallery-photo > img");
let imageTitle = document.querySelector("#gallery-info > h3");
let imageDescription = document.querySelector("#gallery-info > p");


thumbnails.forEach(function(thumbnail) {
	thumbnail.addEventListener("click", function() {
		// code to set clicked image as main image
		mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
		mainImage.setAttribute("alt", thumbnail.alt);

		// console.log(imageTitle);
		imageTitle.innerHTML = thumbnail.dataset.title;
		// console.log(imageDescription);
		imageDescription.innerHTML = thumbnail.dataset.description;

		thumbnailDivs.forEach(function(thumbnailDiv) {
			thumbnailDiv.setAttribute("class", "");
		})
		thumbnail.parentElement.setAttribute("class", "current");

	});
});
}