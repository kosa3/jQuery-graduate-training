$(function () {
    // Write your code here
    var $square = $('#square');

    $('#clicker').on('click', function () {
        var width = parseFloat($square.css('width'));
        $square.css('width', width * 1.2 + 'px');
        $square.css('height', width * 1.2 + 'px');
    });
});
