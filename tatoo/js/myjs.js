$(function(){
	mainHeight();
	$(window).resize(mainHeight);
	showHideMenu();
	autoSlider();
	s04Hover();
	$(window).resize(s04Hover);
	gorizontLine();
	$(window).resize(gorizontLine);
	
});	
function mainHeight(){
	var h = $(window).height();
	$("#main").css("min-height", h);
	var hh = $("#main").height();
	$("#mask").css("height", hh);
	if(hh > h){
		hBottom = h - hh + 10; 
		$("#main ol, #social").css("bottom", hBottom);
	}
	else{$("#main ol, #social").css("bottom", "20px");}
}
function showHideMenu(){
	$("#move-menu").hide();
	$("#show-hide-menu").on("click", function(){
	$("#move-menu").animate({width: 'toggle'}, 'slow', function(){
		if($("#move-menu").is(":visible") == true)$("#show-hide-menu").html("x menu");
		else{$("#show-hide-menu").html("<i class='fa fa-bars' aria-hidden='true'></i> menu");}
		});
	});
	/*------------- анімація меню для моб до 768 пікс.  ----------------*/
	$("#show-hide-menu-mob").on("click", function(){
		$("#move-menu").animate({height: 'toggle'}, 'slow', function(){
		if($("#move-menu").is(":visible") == true)$("#show-hide-menu-mob").html("x menu");
		else{$("#show-hide-menu-mob").html("<i class='fa fa-bars' aria-hidden='true'></i> menu")}
		});
	});

}
$("nav ul li a").on("click", function(){
$("nav ul li a").removeClass("activ");
$(this).addClass("activ");
});
var num = 2;
$("ol li").click(function(){
	num = parseInt($(this).attr("data-slide-to"))+1;
	$("ol li").removeClass("active");
	$(this).addClass("active");
	$("#mask").animate({opacity:"0.97"},"fast", function(){
		$("#main").css("background-image", "url(images/main" + num + ".jpg");
	});
	$("#mask").animate({opacity:"0.9"},"fast");
	});
	
function autoSlider(){

	setInterval(function(){
	if (num < 4)num ++;
	else{num = 1;}
	$("ol li").removeClass("active");	
	$("[data-slide-to='" + (num - 1) + "']").addClass("active");
	$("#mask").animate({opacity:"0.97"},"slow", function(){
		$("#main").css("background-image", "url(images/main" + num + ".jpg");
	});
	$("#mask").animate({opacity:"0.9"},"slow");
	},5000);
}	
	
	function s04Hover(){
			if($(window).width() < 430){
			var w = $("#s04-gallery img").width();
			$(".s04-hover").css({
				"width":w + 20,
				"height":w + 20,
				"margin-left": - w / 2 - 10
			});			
			}
			else{$(".s04-hover").removeAttr("style");}
			}

	function gorizontLine(){
		var w = $(window).width();
		var ww = $ ("#subscribe .container").width();
		var result = (w - ww) / 2;
		if(w > 991)
		$("#subscribe").css("background-size", result + "px 35px");
		else{
		$("#subscribe").removeAttr("style");
		}
	}
$(document).ready(function(){
	$('.s05-slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: true,
	  //fade: true,
	  speed:1500,
	  autoplaySpeed:1500,
	  autoplay:true,
	  dots: false,
	  
	  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }

    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
		arrows:false
      }
	  
	},{
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
		arrows:false
      }
	  
	}
	]
	  
	});
});

$(document).ready(function(){
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.reviews-text',
	  speed:1500,
	  autoplaySpeed:2500,
	  autoplay:true
	});
	$('.reviews-text').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
	  arrows: true,
	  speed:1500,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next')
	});
});

$(document).ready(function(){
	$('.big-img-sider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.small-img-slider',
	  speed:1000,
	  autoplaySpeed:2500,
	  autoplay:true
	});
	$('.small-img-slider').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.big-img-sider',
	  dots: false,
	  //centerMode: false,
	  //centerPadding:'6px',
	  focusOnSelect: true,
	  arrows: true,
	  speed:1000,
	  
	  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }

    }, {
	 breakpoint: 650,
      settings: {
        slidesToShow: 4,
      }

    },{

      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      }

    },{
	 breakpoint: 400,
      settings: {
        slidesToShow: 2,
      }

    }
	]
	  
	});
});

$(document).ready(function(){
	$("#scroll-top").click(function(){
		$("body, html").animate({
				scrollTop:0
			}, 800);
			return false;
	});
});

$(document).ready(function(){
        
        
        //<script type="text/javascript">
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(22.959598, 76.048066), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
				var iconBase = 'http://gid.rv.ua/';

				
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(22.959598, 76.048066),
                    map: map,
					icon: iconBase + 'new-marker.png',
                    title: 'Webstrot Technology'
                });
            }

});

$(function(){
	var show = true;
	$(window).on("scroll load resize", function(){
		if(!show) return false;
		var w_top = $(window).scrollTop();
		var e_top = $("#our-achievements").offset().top;
		var e_height = $("#our-achievements").outerHeight();
		var w_height = $(window).height();
		if(w_top + w_height >= e_top + 300){
			$("[data-numberanimate='d1']").animateNumber({ number: 910 }, 2000);
			$("[data-numberanimate='d2']").animateNumber({ number: 520 }, 2000);
			$("[data-numberanimate='d3']").animateNumber({ number: 352 }, 2000);
			$("[data-numberanimate='d4']").animateNumber({ number: 205 }, 2000);
			$("[data-numberanimate='d5']").animateNumber({ number: 2524 }, 2000);
			show = false;
		};
	});

});

$(document).ready(function(){

	$("#move-menu li a").click(function(){
		var href = $(this).attr("href");
		var e_top = $(href).offset().top;
		$("body, html").animate({
			scrollTop:e_top
		}, 800);
	});
	
});
/*----- #s04 switch class active -------- */
$(document).ready(function(){
	$(".s04-hover").on("click mouseover", function(){
		$(".s04-hover").removeClass("s04-hover-active");
		$(this).addClass("s04-hover-active");
	});
});

/*----- #s04 modal -------- */
$(document).ready(function(){
	$(".s04-hover i.fa-search").on("click", function(){
		$(".s04-modal-body img").attr("src", $(this).parent("div").parent("div").parent("div").children("img").attr("src"));
	});
});

/*----- VideoBackground -------- */



$(document).ready(function(){
var vid = document.getElementById("myVideo");
vid.volume = 0.03;
	$("#play-button").on("click", function(){
		$("#video-text-right").animate({
			width:"toggle",
			"right":"-1000px"
		}, 1500);
		$("#video-text-left").animate({
			width:"toggle",
			"left":"-1000px"
		}, 1500, function(){
			$("#myVideo").css({
			"display": "block",
			"left": ($(window).width() - $("#myVideo").width())/2
			});
			vid.play();
		});		
		$("#play-button").animate({
			"opacity":"0"
		}, function(){$("#play-button").css("display", "none");});
	});
	var play_pause = 1;
	$("#myVideo").click(function(){
			switch(play_pause){
			case 1:
			vid.pause();
			play_pause = 0;
			break;
			case 0:
			vid.play();
			play_pause = 1;
			break;
			}
	});
	$( function() {
    $( "#myVideo").draggable();
  } );

});


$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
})
