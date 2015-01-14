Zepto(function($){
	var timer = false;
	($(window).width() > 840) && $(window).on('resize', function(){
		(timer !== false) && clearTimeout(timer);
		timer = setTimeout(function(){
			$('header ul').show();
		}, 200);
	});

	var footer = $('footer');
	var scrollHeight = $(document).height();
	($(window).width() > 840) && ($(window).height() == scrollHeight) && footer.css({bottom: 0});

	($(window).width() > 840) && $(window).on('scroll', function(){
		var scrollPosition = $(window).height() + $(window).scrollTop();
		((scrollHeight - scrollPosition) / scrollHeight < .2) ? footer.css({bottom: 0}) && $('body > main').css({'margin-bottom': 170}) : footer.css({bottom: '-200px'});
	});

	$('#HeaderMenu').on('click', function(e){
		e.preventDefault();
		$('header ul').toggle();
	});
});