$(document).ready(function() {
	$(function(){
		$('.navbar-toggle').click(function(){
			$('.navbar-toggle').toggleClass('active-block');
		});
	});
	$("select").selecter({
		cover: true
	});
	
	$("#owl-animal").owlCarousel({
		items : 1,
		singleItem : true,
		pagination : false,
		autoPlay : true
	});

	
});