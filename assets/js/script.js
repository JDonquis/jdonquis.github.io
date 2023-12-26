// /*Tecno Content*/
// var status_menu = true;
// var before_select = null;
// var link_before_select = null;

// //Check if there li active or not
// function check_status_menu()
// {
// 	let li = document.querySelectorAll('.li-content');

// for(let el of li ){

// 	if(el.classList.contains('active'))
// 			return false;

// }

// return true;
// }

// //Add or not mouseenter and mouseleave to menu
// function get_menu(){
// let li = document.querySelectorAll('.list-tecno>li');

// li.forEach(el =>{

// 	el.addEventListener('mouseenter',e => {
		
// 		if(status_menu){
// 				let content = document.querySelector(`#${el.id}-content`);
// 				content.classList.remove('d-none');
// 				content.classList.add('d-flex');
// 			}
// 	})

// 	el.addEventListener('mouseleave',e => {
// 		if(status_menu){
// 			let content = document.querySelector(`#${el.id}-content`);
// 			content.classList.remove('d-flex');
// 			content.classList.add('d-none');
// 		}
// 	})



// })
// }

// get_menu();

// document.addEventListener('click',e=>{

// 	if(e.target.matches(".li-content"))
// 	{
// 		if(!document.querySelector(`#${e.target.id}-content`).classList.contains('focus'))
// 		{ 
// 			if(before_select == null && link_before_select == null){	
// 					e.target.classList.add('active');
// 					document.querySelector(`#${e.target.id}-content`).classList.remove('d-none');
// 				  document.querySelector(`#${e.target.id}-content`).classList.add('d-flex','focus');
// 				  status_menu = check_status_menu();
// 				  get_menu();
// 				  before_select = document.querySelector(`#${e.target.id}-content`);
// 				  link_before_select = e.target;
// 			  }
// 			  else{
// 			  	before_select.classList.remove('d-flex','focus');
// 			  	before_select.classList.add('d-none');
// 			  	link_before_select.classList.remove('active');
// 			  	e.target.classList.add('active');
// 					document.querySelector(`#${e.target.id}-content`).classList.remove('d-none');
// 				  document.querySelector(`#${e.target.id}-content`).classList.add('d-flex','focus');
// 				  status_menu = check_status_menu();
// 				  get_menu();
// 				  before_select = document.querySelector(`#${e.target.id}-content`);
// 				  link_before_select = e.target;

// 			  }
// 		}
// 		else{
// 			e.target.classList.remove('active');
// 			document.querySelector(`#${e.target.id}-content`).classList.remove('d-flex','focus');
// 		  document.querySelector(`#${e.target.id}-content`).classList.add('d-none');
// 		  status_menu = check_status_menu();
// 		  get_menu(); 	
// 		}
// 	}
	
// })



// let aboutme = false;
// let projects = false;


// document.addEventListener("scroll", (event) => {
//   let p = window.scrollY;


//   if(p >= 500 && aboutme == false)
//   {
//   	document.querySelector('#about-me-text-section').classList.add('opacity-activate');
//   	document.querySelector('#about-me-image-section').classList.add('opacity-activate');

//   	if (p>= 800){
// 		document.querySelector('#about-me-tecno-section').classList.add('opacity-activate');  	 
 		
//   	}


//   	if(p >= 1500)
//   		{
//   			document.querySelector("#line-bottom-2").classList.add('go-down');
  			

//   			aboutme = true;

//   		}
//   }

  
//   if(p>=2100 && projects == false)
//   {
//   	document.querySelector('#title-project-section').classList.add('opacity-activate');
  	
//   	if(p>=2230)
//   			document.querySelector('#villadonq').classList.add('opacity-activate');

//   	if(p>=2460)
//   		document.querySelector('#sysver').classList.add('opacity-activate');
  			

//   	if(p>=2690)
//   			document.querySelector('#facilito').classList.add('opacity-activate');

//   	if(p>=2820)
//   			document.querySelector('#maucake').classList.add('opacity-activate');
  	 
//   }

 
// });


// Set scroll Reveal
ScrollReveal({

	reset:false,
	distance:'60px',
	duration:2500,
	delay:400
});

ScrollReveal().reveal('.menu-nav',{delay:0, easing:'ease-in-out',duration:800,origin:'top'});
ScrollReveal().reveal('.box-typed-text',{interval:200, easing:'ease-in-out',duration:600,origin:'right'});
ScrollReveal().reveal('.introduce-card',{delay:900, easing:'ease-in-out',duration:600,origin:'right'});
ScrollReveal().reveal('.card-skills-resume',{delay:900, easing:'ease-in-out',duration:600,origin:'right'});
ScrollReveal().reveal('.social-link',{delay:1100, easing:'ease-in-out',duration:600,origin:'bottom'});
ScrollReveal().reveal('#about-me',{delay:1100, easing:'ease-in-out',duration:600,origin:'bottom'});










// Set all aria hidden depends window width
const windowWidth = window.innerWidth;

if (windowWidth < 768) {

  const elementsWithAriaHidden = document.querySelectorAll('[aria-hidden]');

  for (const element of elementsWithAriaHidden) 
  {

    const ariaHiddenOfElement = element.getAttribute('aria-hidden');

    // Si el valor es false, establecerlo en true
    if (ariaHiddenOfElement === 'false') {
      element.setAttribute('aria-hidden', 'true');
    } else {
      // Si el valor es true, establecerlo en false
      element.setAttribute('aria-hidden', 'false');
    }
  }
}
