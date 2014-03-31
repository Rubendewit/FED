$(document).ready(function(){

    $('header a:nth-of-type(2)').on('click', function(){
        $('nav').slideToggle(450);
    });

    $('footer > section:nth-of-type(3) > h1').on('click', function(){
        $('footer > section:nth-of-type(3) > ul').slideToggle(450);
    });

});