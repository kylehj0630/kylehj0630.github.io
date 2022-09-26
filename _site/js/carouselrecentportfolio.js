jQuery(document).ready(function ($) {		
	$('#recent-portfolio').carouFredSel({
		responsive: true,
		items       : {
        width       : 200,
        height      : 290,
        visible     : {
            min         : 1,
            max         : 4
        }
    },
		width: '100%',
		height: '290px',
		auto: true,
		circular	: true,
		infinite	: false,
		prev : {
			button		: "#car_prev",
			key			: "left",
				},
		next : {
			button		: "#car_next",
			key			: "right",
					},
		swipe: {
			onMouse: true,
			onTouch: true
			},
		scroll: {
        easing: "",
        duration: 1200
    }
	});
});

