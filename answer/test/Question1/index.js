/**
 *  #squareがマウスオーバーされたらbackground-colorをredに、マウスアウトしたらbackground-colorをblueに戻してください
 **/
$(function () {
    // Write your code here
    $('#square').on('mouseover', function () {
        $(this).css('background-color', 'red')
    });

    $('#square').on('mouseout', function () {
        $(this).css('background-color', 'blue')
    });
});
