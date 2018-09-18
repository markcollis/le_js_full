function activateGallery() {
	// alert("Hello from the gallery file!");

let thumbnails = document.querySelectorAll("#gallery-thumbs img");
let thumbnailDivs = document.querySelectorAll("#gallery-thumbs div");
let mainImage = document.querySelector("#gallery-photo > img");
let imageTitle = document.querySelector("#gallery-info > h3");
let imageDescription = document.querySelector("#gallery-info > p");


thumbnails.forEach(function(thumbnail) {
	// code to preload large images
	let newImageSrc = thumbnail.dataset.largeVersion;
	let largeVersion = new Image();
	largeVersion.src = newImageSrc;

	thumbnail.addEventListener("click", function() {
		// code to set clicked image as main image
		mainImage.setAttribute("src", newImageSrc);
		mainImage.setAttribute("alt", thumbnail.alt);

		// code to match associated text to image
		// console.log(imageTitle);
		imageTitle.innerHTML = thumbnail.dataset.title;
		// console.log(imageDescription);
		imageDescription.innerHTML = thumbnail.dataset.description;

		// code to highlight thumbnail for current image
		thumbnailDivs.forEach(function(thumbnailDiv) {
			thumbnailDiv.setAttribute("class", "");
		})
		thumbnail.parentElement.setAttribute("class", "current");

	});
});
}