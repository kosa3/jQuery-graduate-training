$(function () {
  // Write your code here
  var $toc = $("<ul id='toc'></ul>");

  $('h1').each(function(i, h1) {
    var $tocHeadingItem = $('<li><a href="#' + i + '">' + $(h1).text() + "</a></li>");
    $tocHeadingItem.appendTo($toc);

    $(h1).attr('id', i);
  });

  $toc.prependTo($('body'));
});
