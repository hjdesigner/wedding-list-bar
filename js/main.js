
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
function scrollBar() {
	var scrollDiv = document.querySelector('.weddingListBar__details-body');
	jQuery(scrollDiv).mCustomScrollbar();
}
function openDetails() {
	var buttonOpen = document.querySelector('[data-id="openDetails"]');
	var buttonClose = document.querySelector('[data-id="detailsClose"]');
	var text = document.querySelector('[data-id="openDetailsText"]');
	var details = document.querySelector('[data-id="details"]');
	buttonOpen.addEventListener('click', function() {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			text.innerHTML = 'ver';
			details.classList.remove('active');
			return
		}
		details.classList.add('active');
		text.innerHTML = 'ocultar';
		this.classList.add('active');
	})
	buttonClose.addEventListener('click', function() {
		if (buttonOpen.classList.contains('active')) {
			buttonOpen.classList.remove('active');
			text.innerHTML = 'ver';
			details.classList.remove('active');
			return
		}
		details.classList.add('active');
		text.innerHTML = 'ocultar';
		buttonOpen.classList.add('active');
	})
}


window.addEventListener('DOMContentLoaded', function() {
	OpenClose();
	carousel();
	scrollBar();
	openDetails();
})

