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

        //--------------------------------------------//
//--------------ADAMS LIGHTBOX----------------//
//--------------------------------------------//

function showLightbox1 () {
  var lightbox = document.getElementById("lightbox1");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1";
  document.getElementsByClassName("lightboxImg");
  img.style.backgroundImage = src("\loelleHairOil.jpg");
}

function hideLightbox1 () {
  var lightbox = document.getElementById("lightbox1");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1";
  document.getElementsByClassName("img").style.backgroundImage = url("\loelleFaceOil.jpg"); 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1"; 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1"; 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1"; 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1"; 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}

function showLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "block";
  lightbox.style.opacity = "1"; 
}

function hideLightbox2 () {
  var lightbox = document.getElementById("lightbox2");
  lightbox.style.display = "none";
  lightbox.style.opacity = "0"; 
  
}



});