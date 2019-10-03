$(document).ready(function () {
    $('#side-menu-button').on('click', function () {
        

        let click = $(this).data('clicks');

        if (click) {
            $('#side-menu').animate({ left: '0px' });
        } else {
            $('#side-menu').animate({ left: '-221px' });
        };
        $(this).data('clicks', !click);
    })
})