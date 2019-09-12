$(function () {
    $.ajax({
        type:"post",
        url:"../json/finance/insurancedetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var msglist = data.msglist;
            var html = '';
            $.each(msglist,function (i, item) {
                html += ' <li class="introlist">';
                html += '<p>'+item.msgleft+'</p>';
                html += ' <p>'+item.msgright+'</p>';
                html += ' </li>';
            });
            $(".introcot").html(html);

            var morelink = data.morelink;
            var html = '';
            $.each(morelink,function (i, item) {
                html += '<a href="javascript:;">'+item.link+'</a>'+item.sign+'';
            });
            $(".morelink").append(html);

            var stepmsg = data.stepmsg;
            var html = '';
            $.each(stepmsg,function (i,item) {
                html += '<p>'+item.msg+'</p>';
            });
            $(".steplist").html(html);
        }
    })
});