$(function() {
    var $backgroundColor = $('li').css('backgroundColor');

    $('ul').append("<p>color was " + $backgroundColor + "</p>");

    $('li').each(function() {
        $(this).css({'backgroundColor':'#c5a996',
                    'border-color':'white',
                    'border-width':'1px',
                    'border-style':'solid',
                    'color':'black',
                    'text-shadow':'none',
                    'font-family':'Georgia'});
    });

});
