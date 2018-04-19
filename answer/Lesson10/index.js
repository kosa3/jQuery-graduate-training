$(function () {
    // Write code here
    $('#products')
        .on('click', 'li', function() {
            var productId = $(this).data('product');
            alert('Product ID: ' + productId + ' added to cart.');
            $('#product' + productId).fadeOut(400);
        });
});
