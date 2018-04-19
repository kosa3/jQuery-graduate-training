$(function () {
    $('div.poem-stanza').addClass('highlight');

    $('#more').on('click', function () {
        $.ajax({
            type: 'GET',
            url: 'article.html',
            dataType: 'html'
        }).done(function (data) {
            $('#chapter-11').append(data);
            $('#more').remove();
        }).fail(function () {
            alert('失敗しました');
        })
    })
});
