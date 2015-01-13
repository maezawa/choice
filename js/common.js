Zepto(function($){
	var timer = false;
	($(window).width() > 840) && $(window).on('resize', function(){
		(timer !== false) && clearTimeout(timer);
		timer = setTimeout(function(){
			$('header ul').show();
		}, 200);
	});

	($(window).width() > 840) && $(window).on('scroll', function(){
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();
		var footer = $('footer');
		((scrollHeight - scrollPosition) / scrollHeight < .2) ? footer.css({bottom: 0}) : footer.css({bottom: '-200px'});
	});

	$('#HeaderMenu').on('click', function(e){
		e.preventDefault();
		$('header ul').toggle();
	});
});