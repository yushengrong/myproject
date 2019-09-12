$(function () {
    //选项卡
    $(".hidebox").css("display","none");
    $(".nav>span").click(function () {
        $(".hidebox").toggle();
        $(this).toggleClass("on").toggleClass("off")
    });
    $(".tab_menu>li").click(function () {
        var index = $(this).index();
        $(".tab_menu>li").eq(index).addClass("now").siblings().removeClass("now");
        $(".tab_box>li").eq(index).fadeIn().siblings().hide()
    });

    $.ajax({
        type:"post",
        url:"../json/finance/insurance.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var insulist = data.insulist;
            var html = '';
            $.each(insulist,function (i, item) {
                html += '<div class="insulist" onclick="insudtl()">'
                html += '<div class="inlileft">'
                html += '<div class="imgcot">'+item.type+'</div>';
                html += '<img src='+item.image+' alt="">';
                html += '</div>';
                html += '<div class="inlimid">'
                html += '<p>'+item.name+'</p>'
                html += '<p>'+item.conpany+'</p>'
                html += '<p>'+item.number+'<span>'+item.start+'</span></p>'
                html += ' </div>'
                html += '<button class="inlibtn"><a href="'+item.url+'">'+item.btn+'</a></button>'
                html += ' </div>'
            });
            $(".insucot").html(html);

            var hidelist = data.hidelist;
            var html = '';
            $.each(hidelist,function (i, item) {
                html += ' <div class="hidecot">';
                html += '<div class="hidelist">'+item.msg1+'</div>';
                html += '<div class="hidelist">'+item.msg2+'</div>';
                html += '<div class="hidelist">'+item.msg3+'</div>';
                html += '</div>';
            });
            $(".hidebox").html(html);
        }
    })
})