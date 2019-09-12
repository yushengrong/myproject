$(function () {
    $(".head>span").click(function () {
        $(this).toggleClass("on").toggleClass("off");
        $(".underlist").toggle();
    })
})