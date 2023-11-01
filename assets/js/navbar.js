// Navbar Behavior
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const navItems = document.querySelectorAll('.nav-item');

console.log(sections)


window.addEventListener('scroll', function() {
  
  //Control box shadow navbar
  const menu = document.querySelector('.menu-nav');

  if (window.scrollY > 0) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }

  //Active navlink on scroll
  sections.forEach(sec =>{

  	let top = window.scrollY;
  	let offset = sec.offsetTop - 150;
  	let height = sec.offsetHeight;
  	let id = sec.getAttribute('id');

  	if(top >= offset && top < offset + height)
  	{
  		navItems.forEach(item => {

  			item.classList.remove('nav-item-active');
  			let link = document.querySelector(`.nav-item a[href*="${id}"]`);
  			link.parentNode.classList.add('nav-item-active');
  		})
  	}

  })


});

