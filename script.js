/*Tecno Content*/
let li = document.querySelectorAll('.list-tecno>li');

li.forEach(el =>{

	el.addEventListener('mouseenter',e => {
		let content = document.querySelector(`#${el.id}-content`);
		content.classList.remove('d-none');
		content.classList.add('d-flex');
	})

	el.addEventListener('mouseleave',e => {
		let content = document.querySelector(`#${el.id}-content`);
		content.classList.remove('d-flex');
		content.classList.add('d-none');
	})

})

let aboutme = false;
document.addEventListener("scroll", (event) => {
  let p = window.scrollY;


  if(p >= 500 && aboutme == false)
  {
  	document.querySelector('#about-me-text-section').classList.add('opacity-activate');
  	document.querySelector('#about-me-image-section').classList.add('opacity-activate');

  	if (p>= 800){
		document.querySelector('#about-me-tecno-section').classList.add('opacity-activate');  	 
 		aboutme = true;
  	}



  }
  console.log(p);
 
});
