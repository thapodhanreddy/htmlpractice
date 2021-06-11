$(document).ready(function(){
    console.log('hello');
    $("#demo").carousel();
 
    $('.carousel-control-prev').click(function(){
        $('#demo').carousel('prev');
    });
    $('.carousel-control-next').click(function(){
        $('#demo').carousel('next');
    });
    $('.item1').click(function(){
        $('#demo').carousel(0);
    });
    $('.item2').click(function(){
        $('#demo').carousel(1);
    });
    $('.item3').click(function(){
        $('#demo').carousel(2);
    });

    
 
 });