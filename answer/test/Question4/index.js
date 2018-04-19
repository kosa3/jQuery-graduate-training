/**
 * .show-modalをクリックで#shadeと#modalwinの.hideを外す
 * #modalwinの表示場所はウィンドウの縦横の中央に必ず位置する
 * #shadeと#modalwinの閉じるボタンを押すことで初期表示に戻る
 *
 */
$(function () {
    // モーダルウィンドウを開く
    function showModal(event) {
        event.preventDefault();

        var $shade = $('#shade');
        var $modalWin = $('#modalwin');
        var $window = $(window);
        var posX = ($window.width() - $modalWin.outerWidth()) / 2;
        var posY = ($window.height() - $modalWin.outerHeight()) / 2;

        $shade
            .removeClass('hide')
            .on('click', function () {
                hideModal();
            });

        $modalWin
            .css({left: posX, top: posY})
            .removeClass('hide')
            .on('click', 'button', function () {
                hideModal();
            });
    }

    function hideModal() {
        $('#shade').addClass('hide');
        $('#modalwin').addClass('hide');
    }

    $('.show-modal').on('click', showModal);
});