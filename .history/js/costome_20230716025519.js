<script>
$(document).ready(function () {
    $('.tgl-ul-class').hide();


    $('.tgl_btn').click(function () {
        $('.tgl-ul-class').slideToggle(350);
        $('.tgl_btn i').toggleClass('fa-bars fa-times');
    })

    //  $('.tgl-ul-class li a').click(function(){
    //       $(this).siblings('.mob_sub_menu').slideToggle();
    //  })

    //  $('.mob_sub_menu li a').click(function(){
    //       $(this).siblings('.mob_peta_menu').slideToggle();
    //  })



    // Floder JS-------------------------------------------
    // $('main').hide()
    // setTimeout(function () {
    //     $('.floder').fadeOut(750);
    //     $('main').show()
    // }, 3000)
})

{/* // -----------Wow JS 👇👇👇👇 */}
new WOW().init();


{/* // -----------Aos JS 👇👇👇👇 */}

AOS.init();


//-------- typed js  👇👇👇👇
$(".typed").typed({
    strings: ["PRINCE", "WEB DESIGNER", "DEVELOPER", "CODER", "MOTIVATIONAL SPEAKER", "UI-UX DESIGNER"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 90,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }






});







// ==========================================


// ------------------------- carousel-testimony Owl Carosel 👇👇👇👇👇

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();


    var owl = $('.carousel-testimony');
    owl.owlCarousel({
        items: 1,
        loop: true,
        // margin: 10,
        nav:false,
        dots:false,
        autoplay: true,
        autoplayTimeout: 1000,
        // autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


});





</script>

