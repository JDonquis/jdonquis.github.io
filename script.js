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
