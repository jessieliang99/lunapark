var nav = document.document.getElementsById ('nav');

window.onscroll = function () {

	if(window.pageYOffset > 350){

	nav.style.position = "fixed";
	nav.style.top = 0;

	} else {
		box.style.position = "absolute";
		box.style.top = 100;
	}
}