$(document).ready(function(){

    $('header a:nth-of-type(2)').on('click', function(){
        $('nav').slideToggle(450);
    });

    $('footer > section:nth-of-type(3) > h1').on('click', function(){
        $('footer > section:nth-of-type(3) > ul').slideToggle(450);
    });

    $('#aanmeldenp').on('click', function(){
        $('main > article > section > form > section:first-of-type').slideDown(450);
        $('main > article > section > form > section:last-of-type').slideUp(450);
        $('main > article > section > form > input[type="submit"]').show();
    });

    $('#aanmeldens').on('click', function(){
        $('main > article > section > form > section:first-of-type').slideUp(450);
        $('main > article > section > form > section:last-of-type').slideDown(450);
        $('main > article > section > form > input[type="submit"]').show();
    });

});