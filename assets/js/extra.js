$(document).ready(function(){

//--------------------------------------------//
//-----------       SCROLL BTN        --------//
//--------------------------------------------//
    
$('.moveDown').click(function() {
    $('html,body').animate({
        scrollTop: $('.site-lookdisplay-section').offset().top -60},
        1000);
});

$('.button-1').click(function() {
    $('html,body').animate({
        scrollTop: $('.site-our-gallery').offset().top -60},
        2000);
});

//--------------------------------------------//
//-----------       ZOOM ON HOVER       --------//
//--------------------------------------------//

$('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })


//--------------------------------------------//
//--------------  THE    NAV   ---------------//
//--------------------------------------------//

/*========== MENU ==========*/
        
        $(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    
                    $('.dropdown')
                        .on('mouseover', function () {
                            $(this).addClass('open');
                            $('b', this).toggleClass("caret caret-up");
                        })

                    .on('mouseout', function () {
                        $(this).removeClass('open');
                        $('b', this).toggleClass("caret caret-up");
                    });


                } else {
                    $('.dropdown').off('mouseover').off('mouseout');
                    $('.dropdown-toggle')

                    .on('click', function (e) {
                        $('b', this).toggleClass("caret caret-up");
                    });

                }
            }
            toggleNavbarMethod();
            $(window).on("resize", (toggleNavbarMethod));

            $(".navbar-toggle").on("click", function () {
                $(this).toggleClass("active");
            });
        });

        /*========== MOBILE MENU ==========*/
        $('.mobile_menu_btn').jPushMenu({
            closeOnClickLink: false
        });
        $('.dropdown-toggle').dropdown();

});
//--------------------------------------------//
//--------------ADAMS Modal   ----------------//
//--------------------------------------------//



// Get the modal
var modal1 = document.getElementById('modal1');
// Get the button that opens the modal
var btn1 = document.getElementById("openModalBtn1");
// Get the <span> element that closes the modal
var div1 = document.getElementById('closeModalBtn1');
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
div1.onclick = function() {
    modal1.style.display = "none";
}

/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

 //--------------------------------------------//
//--------------Lazy loading imgs   ----------------//
//--------------------------------------------//






