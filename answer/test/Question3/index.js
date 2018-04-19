/**
 * .tabをクリックすると初期表示で付いていた.is-activeが消えクリックされた.tabに.is-activeが付与される
 * 同時に表示されているliタグの文章も.hideを制御して変更する
 */
$(function () {
     $('.tab').on('click', function () {
         $('.tab').removeClass('is-active');
         $(this).addClass('is-active');
         $('li').addClass('hide');
         $('.' + $(this).data('tab')).removeClass('hide');
     })
});
