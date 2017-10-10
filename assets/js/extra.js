$(document).ready(function(){

//--------------------------------------------//
//-----------       SCROLL BTN        --------//
//--------------------------------------------//
    
$('.scroll-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('.site-lookbooks-collection').offset().top -60},
        1000);
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

})
//--------------------------------------------//
//--------------ADAMS Modal   ----------------//
//--------------------------------------------//
