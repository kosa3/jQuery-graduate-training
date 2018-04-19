/**
 *  .langのradioボタンが押されたら#languageに押されたvalueを表示する
 **/
$(function () {
    // Write code here
    $('input[name="lang"]').on('click', function () {
        $('#language').text($(this).val());
    })
});
