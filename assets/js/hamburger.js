let hamburgerBtn = document.querySelector(".hamburger");
let navMobile = document.querySelector(".navbar-nav-mobile");
let body = document.querySelector("body");
let html = document.querySelector("html");

hamburgerBtn.addEventListener("click",e => {

	hamburgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("mobile-active");
	body.classList.toggle("body-paused");
	html.classList.toggle("body-paused");


})

  document.addEventListener('click', e => {

    if(e.target.matches('.nav-link'))
    {
      hamburgerBtn.classList.toggle("is-active");
      navMobile.classList.toggle("mobile-active");
      body.classList.toggle("body-paused");
	  html.classList.toggle("body-paused");
    }
  })

