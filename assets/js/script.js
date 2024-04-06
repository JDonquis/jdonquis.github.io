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
ScrollReveal().reveal('#projects',{delay:100, easing:'ease-in-out',duration:600,origin:'bottom'});
// ScrollReveal().reveal('#contact',{delay:100, easing:'ease-in-out',duration:600,origin:'bottom'});




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



// Copy email in clickboard

var emailBox = document.getElementById('email-box');
console.log(emailBox);
emailBox.addEventListener('click', function() 
{ 
  console.log('aa');
  let emailValue = 'juandonquis07@gmail.com';

  let textareaTemp = document.createElement('textarea');
  textareaTemp.value = emailValue;

  document.body.appendChild(textareaTemp);
  textareaTemp.select();
  document.execCommand('copy');
  document.body.removeChild(textareaTemp);

  alert('Email copied to clickboard');

});

