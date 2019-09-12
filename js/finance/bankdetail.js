$(function () {
    $('.tabbox>li').eq(0).show();
    //选项卡切换
    $('.tabtitle>li').click(function () {
        var index = $(this).index();
        $(this).addClass('now').siblings().removeClass('now');
        $('.tabbox >li').eq(index).fadeIn().siblings().hide();

    });
    $.ajax({
        type:"post",
        url:"../json/finance/bankdetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var bankcard = data.bankcard;
            var html = '';
            $.each(bankcard, function (i, item) {
                html += '<li onclick="bcdtljump()">';
                html += ' <img src='+item.image+' alt="">';
                html += ' <div class="bcmsg">';
                html += ' <p>' + item.name + '</p>';
                html += '<p>' + item.type + '</p>';
                html += '</div>';
                html += '</li>';
            });
            $('.bclist').html(html);

            var property = data.property;
            var html = '';
            $.each(property,function (i, item) {
                html += '<li onclick="prointrojump()">';
                html += '<p>'+item.msg1+'</p>';
                html += ' <p>'+item.msg2+'</p>';
                html += ' <p>'+item.msg3+'</p>';
                html += ' <div class="litype">'+item.type+'</div>';
                html += ' </li>';
            });
            $('.pplist').html(html);
        }
    }) 
});