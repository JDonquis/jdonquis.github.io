/*Tecno Content*/
var status_menu = true;
var before_select = null;
var link_before_select = null;

function check_status_menu()
{
	let li = document.querySelectorAll('.li-content');

for(let el of li ){

	if(el.classList.contains('active'))
			return false;

}

return true;
}

function get_menu(){
let li = document.querySelectorAll('.list-tecno>li');

li.forEach(el =>{

	el.addEventListener('mouseenter',e => {
		
		if(status_menu){
				let content = document.querySelector(`#${el.id}-content`);
				content.classList.remove('d-none');
				content.classList.add('d-flex');
			}
	})

	el.addEventListener('mouseleave',e => {
		if(status_menu){
			let content = document.querySelector(`#${el.id}-content`);
			content.classList.remove('d-flex');
			content.classList.add('d-none');
		}
	})



})
}

get_menu();

document.addEventListener('click',e=>{

	if(e.target.matches(".li-content"))
	{
		if(!document.querySelector(`#${e.target.id}-content`).classList.contains('focus'))
		{ 
			if(before_select == null && link_before_select == null){	
					e.target.classList.add('active');
					document.querySelector(`#${e.target.id}-content`).classList.remove('d-none');
				  document.querySelector(`#${e.target.id}-content`).classList.add('d-flex','focus');
				  status_menu = check_status_menu();
				  get_menu();
				  before_select = document.querySelector(`#${e.target.id}-content`);
				  link_before_select = e.target;
			  }
			  else{

			  	before_select.classList.remove('d-flex','focus');
			  	before_select.classList.add('d-none');
			  	link_before_select.classList.remove('active');
			  	e.target.classList.add('active');
					document.querySelector(`#${e.target.id}-content`).classList.remove('d-none');
				  document.querySelector(`#${e.target.id}-content`).classList.add('d-flex','focus');
				  status_menu = check_status_menu();
				  get_menu();

			  }
		}
		else{
			e.target.classList.remove('active');
			document.querySelector(`#${e.target.id}-content`).classList.remove('d-flex','focus');
		  document.querySelector(`#${e.target.id}-content`).classList.add('d-none');
		  status_menu = check_status_menu();
		  get_menu(); 	
		}
	}
	
})



let aboutme = false;
let projects = false;
// let line_about = false;

document.addEventListener("scroll", (event) => {
  let p = window.scrollY;


  if(p >= 500 && aboutme == false)
  {
  	document.querySelector('#about-me-text-section').classList.add('opacity-activate');
  	document.querySelector('#about-me-image-section').classList.add('opacity-activate');

  	if (p>= 800){
		document.querySelector('#about-me-tecno-section').classList.add('opacity-activate');  	 
 		
  	}


  	if(p >= 1500)
  		{
  			document.querySelector("#line-bottom-2").classList.add('go-down');
  			

  			aboutme = true;

  		}
  }

  
  if(p>=2100 && projects == false)
  {
  	document.querySelector('#title-project-section').classList.add('opacity-activate');
  	
  	if(p>=2230)
  			document.querySelector('#villadonq').classList.add('opacity-activate');

  	if(p>=2460)
  			document.querySelector('#maucake').classList.add('opacity-activate');

  	if(p>=2690)
  			document.querySelector('#facilito').classList.add('opacity-activate');

  		if(p>=2820)
  			document.querySelector('#api').classList.add('opacity-activate');
  	 
  }

 
});
