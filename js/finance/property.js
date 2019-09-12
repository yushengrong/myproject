$(function () {
    //导航栏切换
    $(".tab>li").eq(0).show();
    $(".nav>li").click(function () {
        var index = $(this).index();
        // alert(index);
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab>li").eq(index).stop().fadeIn().siblings().hide();
    })

    //生成数据
    $.ajax({
        type:"post",
        url:"../json/finance/property.json",
        data:{},
        dataType:"json" ,
        success:function (data) {
            var tab_list = data.tab_list;
            var html = '';
            $.each(tab_list,function (i, item) {
                html += '<li onclick="prointrojump()">';
                html += '<p>'+item.msg1+'</p>';
                html += ' <p>'+item.msg2+'</p>';
                html += ' <p>'+item.msg3+'</p>';
                html += ' <div class="litype">'+item.type+'</div>';
                html += ' </li>';
            });
            $(".tab>li>ul").eq(0).html(html);
            $(".tab>li>ul").eq(1).html(html);
            $(".tab>li>ul").eq(2).html(html)
        }

    })

});