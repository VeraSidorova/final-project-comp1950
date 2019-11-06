// JavaScript Document

(function(d){
	
	// d = document
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.btn-menu');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('show');
		
	});
	
	
})(document);