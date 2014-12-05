var flickOps = {
	"duration":300,
	"easing":"linear"
}

var flick = function() {
	$('#_idContainer006').fadeToggle(flickOps);
}

$('body').ready(function(){
	$('#_idContainer006').hide()
	setInterval(function(){flick()}, 3000);
})