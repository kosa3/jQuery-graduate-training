$(function () {
    $('#cars').on('change', function (e) {
        var favouriteCar = $('#cars option:selected').text();
        $('#car-choice').text(favouriteCar);
    });
});
