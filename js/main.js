
function OpenClose() {
	var buttonClose = document.querySelector('[data-id="closeBar"]');
	var widdingListBar = document.querySelector('#weddingListBar');

	buttonClose.addEventListener('click', function() {
		widdingListBar.classList.toggle('close');
	});
}
function carousel() {
	var slider = document.querySelector('.weddingListBar__items-product ul');
	jQuery(slider).slick({
  	slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
  	autoplaySpeed: 2000,
	});
}

window.addEventListener('DOMContentLoaded', function() {
	OpenClose();
	carousel();
})

