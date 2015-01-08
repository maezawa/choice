(function(){
	setTimeout(function(){
		var cloth_bg = new Array();

		for (var i = 0; i < 21; i++){
			cloth_bg.push(new Image());
			if (i == 13) continue;
			new Image().src = "/img/design/cloth_bg/x1/" + (i + 1) + ".jpg";
		}
	}, 500);
})();