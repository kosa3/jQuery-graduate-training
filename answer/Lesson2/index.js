$(function () {
     var $innerElement = $('#selected-plays > li');
     $innerElement
         .addClass('horizontal')
         .addClass('big-letter')
         .first()
         .addClass('col-first')
         .next()
         .addClass('col-second')
         .next()
         .addClass('col-third');

    $('#selected-plays').children('li')
        .addClass('horizontal')
        .addClass('big-letter');

    $('#selected-plays').children('li').first().addClass('col-first');
    $('#selected-plays').children('li:eq(1)').addClass('col-second');
    $('#selected-plays').children('li:eq(2)').addClass('col-third');
});
