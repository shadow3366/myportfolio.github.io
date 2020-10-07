
function callFun(){
window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	navbar.classList.toggle('sticky', window.scrollY > 40);
});

const toggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.navbar-menu');

toggler.addEventListener('click', () => {
	toggler.classList.toggle('active');
	menu.classList.toggle('active');
});
}
callFun();

// back to top button

const backTop = document.querySelector('.back-top');

window.addEventListener('scroll', () => {
	if(window.pageYOffset > 200){
		backTop.classList.add('active');
	}else{
		backTop.classList.remove('active');
	}
})