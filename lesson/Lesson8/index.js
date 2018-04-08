$(function () {
    var inspectCheckbox = function() {
        // Write your code here

    };

    var inspectTextbox = function() {
        // Write your code here

    };

    var inspectSelect = function() {
        // Write your code here

    };

    $('#mycheckbox').on('change', inspectCheckbox);
    $('#mytextbox').on('keyup', inspectTextbox);
    $('#myselect').on('change', inspectSelect);

    inspectCheckbox();
    inspectTextbox();
    inspectSelect();
});
