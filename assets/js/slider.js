let sliderInner = document.querySelector('.slider--inner');
let slides = sliderInner.querySelectorAll('.slide');

let index = 1;

setInterval(function(){

	let percentageSlider = index * 100; 
	sliderInner.style.transform = "translateX(-"+ percentageSlider +"%)"

	index++;

	if(index > (slides.length - 1))
		index = 0;

},4000)