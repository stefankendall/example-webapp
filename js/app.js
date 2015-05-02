$(function () {
    var $pages = $('.page');
    $pages.slice(0, $pages.length - 1).click(function () {
        $(this).addClass('transition-left');
    });
});