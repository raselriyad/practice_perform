(function($){
	
	'use strict';


//*************Started coades ************

//*************** search
$('.Mobile-serch-icon i').on('click', function(){
	$('.search').slideToggle();
});

$(window).resize(function(){
	var searchSize = $(window).width();

	if (searchSize > 991){
		$('.search').removeAttr('style');
	}
})

//************** menu area
$('.menu-icon i').on('click',function(){
	$('.menu').slideToggle();
});

$(window).resize(function(){
	var screenSize = $(window).width()

	if(screenSize > 991){
		$('.menu').removeAttr('style');
	}
});

$('.menu ul').parent('li').children('a').append('<i class="fas fa-angle-double-down"></i>')


// ****** Circle Progressbar plugin start*******


$('.chart').easyPieChart({
            //your options goes here
            size: 180,
            barColor: '#1abc9c',
            scaleColor: false,
            lineWidth: 19,
            trackColor: '#fff',
            lineCap: 'circle',
            animate: 2000,
            textAlign: 'center'
        });

$('.chart-box').easyPieChart({
            //your options goes here
            size: 180,
            barColor: 'red',
            scaleColor: true,
            lineWidth: 19,
            trackColor: '#fff',
            lineCap: 'circle',
            animate: 2000,
            textAlign: 'center'
        });
// ****** Circle Progressbar plugin  end*******

// ****** isotope plugin start*******

// isotope
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})
$('.portfolio-buttons button').on('click', function(){
	$('.portfolio-buttons button').removeClass('portfolio-active-btn')
	$(this).addClass('portfolio-active-btn');

})
// ****** isotope  plugin  end*******


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

/*--------- wow js ------------*/
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


})(jQuery)