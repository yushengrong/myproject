$(function () {
    $.ajax({
        type:"get",
        url:"../json/gp-renovation/answer.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var msg = data.msg;
            var html = '';
            $.each(msg,function (i, item) {
                html += '<li class="msglist">';
                html += '<div class="msgmid">';
                html += '<p>'+item.question+'</p>';
                html += '<div class="content">';
                html += '<span>'+item.siggle+'</span>';
                html += ' <p>'+item.answer+'</p>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
            });
            $('.msg').html(html);

        }
    })
});