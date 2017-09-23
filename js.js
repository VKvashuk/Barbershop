var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");


link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-close2");

mapOpen.addEventListener("click", function(event){
	event.preventDefault();
	mapPopup.classList.add("modal-content-show2");
	overlay.classList.add("modal-overlay-show2");
});

mapClose.addEventListener("click", function(event){
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show2");
	overlay.classList.remove("modal-overlay-show2");
});