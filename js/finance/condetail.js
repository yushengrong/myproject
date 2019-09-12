$(function () {

    $.ajax({
        type:"post",
        url:"../json/finance/condetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var bankmsg = data.bankmsg;
            var html = '';
            $.each(bankmsg,function (i, item) {
                html += '<img src='+item.image+' alt="">';
                html += ' <p>'+item.msg+'</p>'
            });
            $(".card").html(html);
            var intromsg = data.intromsg;
            var html = '';
            $.each(intromsg,function (i, item) {
                html += '<p>'+item.msg1+'</p>'
                html += '<p>'+item.msg2+'</p>'
                html += '<p>'+item.msg3+'</p>'
                html += '<p>'+item.msg4+'</p>'
                html += '<p>'+item.msg5+'</p>'
                html += '<p>'+item.msg6+'</p>'
            });
            $(".msgbox").html(html);
        }
    })
});