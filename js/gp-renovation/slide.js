function comment() {
    window.location.href = 'javascript:;'
}

function contact() {
    window.location.href = 'tel:15678515621'
}
//双击点赞
function dbclick(){
    $(".userlist span").click(function () {
        $(this).toggleClass("zanon").toggleClass("zanoff");
    })
}
//选项卡切换
$(function () {
    $(".colutitle>li").click(function () {
        var index = $(this).index();
        $('.colutitle>li').eq(index).addClass('current').siblings().removeClass('current');

    })

});


