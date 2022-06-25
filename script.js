$('.angle-up').click(function(){
	$('.related-categories-smartphone').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up1').click(function(){
	$('.checkbox').slideToggle('fast')
	$('.search').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up2').click(function(){
	$('.color-categories').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up3').click(function(){
	$('.theother').slideToggle('fast')
	$('.price-boxes').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up4').click(function(){
	$('.checkbox-div').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up5').click(function(){
	$('.memory-input').slideToggle('fast')
	$('.checkbox-div1').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up6').click(function(){
	$('.ram-input').slideToggle('fast')
	$('.checkbox-div2').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.angle-up7').click(function(){
	$('.checkbox1').slideToggle('fast')
	$('.fa-angle-up').toggleClass('rotate')
})
$('.grey-button').click(function(){
	$('.gender-inputs').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.brand-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.color-filters-div').removeClass('display2')
	$('.fabric-inputs').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	
})
$('.show-more').click(function(){
	$('.show-more-categories').toggleClass('display2')
	$('.show-more').addClass('show-more-categories')
	$('.show-less').toggleClass('display2')
	
})
$('.show-less').click(function(){
	$('.show-more-categories').removeClass('display2')
	$('.show-more').removeClass('show-more-categories')
	$('.show-less').removeClass('display2')
	
})


$('.grey-button1').click(function(){
	$('.categories-inputs').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.brand-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.color-filters-div').removeClass('display2')
	$('.fabric-inputs').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	$('.gender-inputs').removeClass('display2')
	
})
$('.grey-button2').click(function(){
	$('.brand-inputs').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.categories-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.color-filters-div').removeClass('display2')
	$('.fabric-inputs').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	$('.gender-inputs').removeClass('display2')
	
	
})
$('.grey-button3').click(function(){
	$('.size-buttons-div').toggleClass('size-buttons-div-display')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.categories-inputs').removeClass('display2')
	$('.brand-inputs').removeClass('display2')
	$('.color-filters-div').removeClass('display2')
	$('.fabric-inputs').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	$('.gender-inputs').removeClass('display2')
	
})
$('.grey-button4').click(function(){
	$('.color-filters-div').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.categories-inputs').removeClass('display2')
	$('.brand-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.fabric-inputs').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	$('.gender-inputs').removeClass('display2')
	
})
$('.grey-button5').click(function(){
	$('.fabric-inputs').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.categories-inputs').removeClass('display2')
	$('.brand-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.color-filters-div').removeClass('display2')
	$('.collar-inputs').removeClass('display2')
	$('.gender-inputs').removeClass('display2')
	
})
$('.grey-button6').click(function(){
	$('.collar-inputs').toggleClass('display2')
	$('.fa-angle-up').toggleClass('rotate')
	$('.heart-button').toggleClass('heart-z')
	$('.gender-inputs').removeClass('display2')
	$('.categories-inputs').removeClass('display2')
	$('.brand-inputs').removeClass('display2')
	$('.size-buttons-div').removeClass('size-buttons-div-display')
	$('.color-filters-div').removeClass('display2')
	$('.fabric-inputs').removeClass('display2')
	
})

$(document).ready(function () {
   

    // menu.hide();

    $('.women').mouseover(

        function () {
            $('.slideLists').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
			
        }
    );
    
    $(".slideLists").mouseleave(
        
        function () {
            $('.slideLists').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});

$(document).ready(function () {
    

   

    $('.men').mouseover(

        function () {
            $('.slideLists1').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists1").mouseleave(
        
        function () {
            $('.slideLists1').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});


   
$(document).ready(function () {


    $('.child').mouseover(

        function () {
            $('.slideLists2').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists2").mouseleave(
        
        function () {
            $('.slideLists2').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
$(document).ready(function () {


    $('.home').mouseover(

        function () {
            $('.slideLists3').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists3").mouseleave(
        
        function () {
            $('.slideLists3').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
  
$(document).ready(function () {


    $('.market').mouseover(

        function () {
            $('.slideLists4').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists4").mouseleave(
        
        function () {
            $('.slideLists4').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })
		

});
$(document).ready(function () {


    $('.cosmetic').mouseover(

        function () {
            $('.slideLists5').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists5").mouseleave(
        
        function () {
            $('.slideLists5').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
$(document).ready(function () {


    $('.shoes').mouseover(

        function () {
            $('.slideLists6').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists6").mouseleave(
        
        function () {
            $('.slideLists6').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
$(document).ready(function () {


    $('.watch').mouseover(

        function () {
            $('.slideLists7').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists7").mouseleave(
        
        function () {
            $('.slideLists7').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
$(document).ready(function () {


    $('.electronic').mouseover(

        function () {
            $('.slideLists8').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
			$('.slideLists9').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists8").mouseleave(
        
        function () {
            $('.slideLists8').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
$(document).ready(function () {


    $('.sports').mouseover(

        function () {
            $('.slideLists9').stop(true, true).slideDown(400);
			$('.shadow-bottom').addClass('background');
			$('.shadow-bottom').addClass('display2')
			$('.slideLists1').stop(true, true).slideUp(400)
			$('.slideLists2').stop(true, true).slideUp(400)
			$('.slideLists3').stop(true, true).slideUp(400)
			$('.slideLists4').stop(true, true).slideUp(400)
			$('.slideLists5').stop(true, true).slideUp(400)
			$('.slideLists6').stop(true, true).slideUp(400)
			$('.slideLists7').stop(true, true).slideUp(400)
			$('.slideLists8').stop(true, true).slideUp(400)
			$('.slideLists').stop(true, true).slideUp(400)
        }
    );
    
    $(".slideLists9").mouseleave(
        
        function () {
            $('.slideLists9').stop(true, true).slideUp(400)
			$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
        })

});
    
	$('#girisYap').hover(function(){
		$('.sign-out').toggleClass('display');	
		$('.slideLists1').stop(true, true).slideUp(400)
		$('.slideLists2').stop(true, true).slideUp(400)
		$('.slideLists3').stop(true, true).slideUp(400)
		$('.slideLists4').stop(true, true).slideUp(400)
		$('.slideLists5').stop(true, true).slideUp(400)
		$('.slideLists6').stop(true, true).slideUp(400)
		$('.slideLists7').stop(true, true).slideUp(400)
		$('.slideLists8').stop(true, true).slideUp(400)
		$('.slideLists9').stop(true, true).slideUp(400)
		$('.slideLists').stop(true, true).slideUp(400)
		$('.shadow-bottom').removeClass('background');
			$('.shadow-bottom').removeClass('display2')
	})

	$('.right-arrow').click(function(){
		$('.cleaning').addClass('move')
		$('.cleaning').addClass('cleaning-display')
		$('.pets').toggleClass('move')
		$('.baby').toggleClass('move')
		$('.health').toggleClass('move')
		$('.skincare').toggleClass('move')
		$('.hair').toggleClass('move')
		$('.cologne').toggleClass('move')
		$('.mouth').toggleClass('mouth-display')
		$('.right-arrow').toggleClass('cleaning-display')
		$('.left-arrow').addClass('display2')
		$('.brands-pops').toggleClass('move')
		$('.brands-pops').toggleClass('cleaning-display')
		$('.brands-pops1').toggleClass('display2')


		

	})
	$('.left-arrow').click(function(){
		$('.cleaning').addClass('move2')
		$('.cleaning').removeClass('cleaning-display')
		$('.pets').toggleClass('move2')
		$('.baby').toggleClass('move2')
		$('.health').toggleClass('move2')
		$('.skincare').toggleClass('move2')
		$('.hair').toggleClass('move2')
		$('.cologne').toggleClass('move2')
		$('.mouth').removeClass('mouth-display')
		$('.left-arrow').removeClass('display2')
		$('.right-arrow').removeClass('cleaning-display')
		$('.brands-pops1').toggleClass('move2')
		$('.brands-pops').removeClass('cleaning-display')
		$('.brands-pops1').removeClass('display2')
		

		

	})

    var lastScrollTop=0;
    $(window).scroll(function(){
        if($(this).scrollTop()>50 ){
            $('.thead-wrapper').addClass('scroll');
        } else {
            $('.thead-wrapper').removeClass('scroll');
        }
        lastScrollTop=$(this).scrollTop();

    });
$(window).on('scroll',function(){
	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  if($(this).scrollTop()>0 ){
    $('.thead-wrapper').addClass('scroll');
  } else{
    $('.thead-wrapper').removeClass('scroll')
  } 
}).trigger('scroll');



var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = '&#9658;'; // play character
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	playing = true;
	slideInterval = setInterval(nextSlide,2000);
}



var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};



var controls1 = document.querySelectorAll('.controls1');
for(var i=0; i<controls1.length; i++){
	controls1[i].style.display = 'inline-block';
}

var slides1 = document.querySelectorAll('#slides1 .slide1');
var currentSlide1 = 0;
var slideInterval1 = setInterval(nextSlide1,2000);

function nextSlide1(){
	goToSlide1(currentSlide1+1);
}

function previousSlide1(){
	goToSlide1(currentSlide1-1);
}

function goToSlide1(n){
	slides1[currentSlide1].className = 'slide1';
	currentSlide1 = (n+slides1.length)%slides1.length;
	slides1[currentSlide1].className = 'slide1 showing1';
}


var playing1 = true;
var pauseButton1 = document.getElementById('pause');

function pauseSlideshow1(){
	pauseButton1.innerHTML = '&#9658;'; // play character
	playing1 = false;
	clearInterval(slideInterval1);
}

function playSlideshow1(){
	pauseButton1.innerHTML = '&#10074;&#10074;'; // pause character
	playing1 = true;
	slideInterval1 = setInterval(nextSlide1,2000);
}


var next1 = document.getElementById('next1');
var previous1 = document.getElementById('previous1');

next1.onclick = function(){
	pauseSlideshow1();
	nextSlide1();
};
previous1.onclick = function(){
	pauseSlideshow1();
	previousSlide1();
};


var controls2 = document.querySelectorAll('.controls2');
for(var i=0; i<controls2.length; i++){
	controls2[i].style.display = 'inline-block';
}

var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;
var slideInterval2 = setInterval(nextSlide2,2000);

function nextSlide2(){
	goToSlide2(currentSlide2+1);
}

function previousSlide1(){
	goToSlide2(currentSlide2-1);
}

function goToSlide2(n){
	slides2[currentSlide2].className = 'slide2';
	currentSlide2 = (n+slides2.length)%slides2.length;
	slides2[currentSlide2].className = 'slide2 showing2';
}


var playing2 = true;
var pauseButton2 = document.getElementById('pause');

function pauseSlideshow2(){
	pauseButton2.innerHTML = '&#9658;'; // play character
	playing2 = false;
	clearInterval(slideInterval2);
}

function playSlideshow2(){
	pauseButton2.innerHTML = '&#10074;&#10074;'; // pause character
	playing2 = true;
	slideInterval2 = setInterval(nextSlide2,2000);
}


var next2 = document.getElementById('next2');
var previous2 = document.getElementById('previous2');

next2.onclick = function(){
	pauseSlideshow2();
	nextSlide2();
};
previous2.onclick = function(){
	pauseSlideshow2();
	previousSlide2();
};



var controls3 = document.querySelectorAll('.controls3');
for(var i=0; i<controls3.length; i++){
	controls3[i].style.display = 'inline-block';
}

var slides3 = document.querySelectorAll('#slides3 .slide3');
var currentSlide3 = 0;
var slideInterval3 = setInterval(nextSlide3,2000);

function nextSlide3(){
	goToSlide3(currentSlide3+1);
}

function previousSlide3(){
	goToSlide3(currentSlide3-1);
}

function goToSlide3(n){
	slides3[currentSlide3].className = 'slide3';
	currentSlide3 = (n+slides3.length)%slides3.length;
	slides3[currentSlide3].className = 'slide3 showing3';
}


var playing3 = true;
var pauseButton3 = document.getElementById('pause');

function pauseSlideshow3(){
	pauseButton3.innerHTML = '&#9658;'; // play character
	playing3 = false;
	clearInterval(slideInterval3);
}

function playSlideshow3(){
	pauseButton3.innerHTML = '&#10074;&#10074;'; // pause character
	playing3 = true;
	slideInterval3 = setInterval(nextSlide3,2000);
}


var next3 = document.getElementById('next3');
var previous2 = document.getElementById('previous3');

next2.onclick = function(){
	pauseSlideshow3();
	nextSlide3();
};
previous3.onclick = function(){
	pauseSlideshow3();
	previousSlide3();
};



var controls4 = document.querySelectorAll('.controls4');
for(var i=0; i<controls4.length; i++){
	controls4[i].style.display = 'inline-block';
}

var slides4 = document.querySelectorAll('#slides4 .slide4');
var currentSlide4 = 0;
var slideInterval4 = setInterval(nextSlide4,2000);

function nextSlide4(){
	goToSlide4(currentSlide4+1);
}

function previousSlide4(){
	goToSlide4(currentSlide4-1);
}

function goToSlide4(n){
	slides4[currentSlide4].className = 'slide4';
	currentSlide4 = (n+slides4.length)%slides4.length;
	slides4[currentSlide4].className = 'slide4 showing4';
}


var playing4 = true;
var pauseButton4 = document.getElementById('pause');

function pauseSlideshow4(){
	pauseButton4.innerHTML = '&#9658;'; // play character
	playing4 = false;
	clearInterval(slideInterval4);
}

function playSlideshow4(){
	pauseButton4.innerHTML = '&#10074;&#10074;'; // pause character
	playing4 = true;
	slideInterval4 = setInterval(nextSlide3,2000);
}


var next4 = document.getElementById('next4');
var previous4 = document.getElementById('previous4');

next4.onclick = function(){
	pauseSlideshow4();
	nextSlide4();
};
previous4.onclick = function(){
	pauseSlideshow4();
	previousSlide4();
};



$('.one').hover(function(){
	$('.alisveriseBasla').toggleClass('display2');
	
   
})
$('.two').hover(function(){
	$('.alisveriseBasla2').toggleClass('display2');
	
   
})
$('.three').hover(function(){
	$('.alisveriseBasla3').toggleClass('display2');
	
   
})
$('.four').hover(function(){
	$('.alisveriseBasla4').toggleClass('display2');
	
   
})
$('.five').hover(function(){
	$('.alisveriseBasla5').toggleClass('display2');
	
   
})
$('.six').hover(function(){
	$('.alisveriseBasla6').toggleClass('display2');
	
   
})
$('.seven').hover(function(){
	$('.alisveriseBasla7').toggleClass('display2');
	$('.band1').toggleClass('hover-p-band')
   
})
$('.eight').hover(function(){
	$('.alisveriseBasla8').toggleClass('display2');
	$('.band2').toggleClass('hover-p-band')
   
})
$('.nine').hover(function(){
	$('.alisveriseBasla9').toggleClass('display2');
	$('.band3').toggleClass('hover-p-band')
   
})
$('.ten').hover(function(){
	$('.alisveriseBasla10').toggleClass('display2');
	$('.band4').toggleClass('hover-p-band')
   
})
$('.eleven').hover(function(){
	$('.alisveriseBasla11').toggleClass('display2');
	$('.band5').toggleClass('hover-p-band')
   
})
$('.twelve').hover(function(){
	$('.alisveriseBasla12').toggleClass('display2');
	$('.band6').toggleClass('hover-p-band')
   
})
$('.thirteen').hover(function(){
	$('.alisveriseBasla13').toggleClass('display2');
	$('.band7').toggleClass('hover-p-band')
   
})
$('.fourteen').hover(function(){
	$('.alisveriseBasla14').toggleClass('display2');
	$('.band8').toggleClass('hover-p-band')
   
})
$('.fifteen').hover(function(){
	$('.alisveriseBasla15').toggleClass('display2');
	$('.band9').toggleClass('hover-p-band')
   
})

$('#apple').change(function(){
    if(this.checked)
	$('#redmi12').fadeOut('slow');
      
    else
	$('#redmi12').fadeIn('slow');

});

