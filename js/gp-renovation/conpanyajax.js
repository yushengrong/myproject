$(function () {
    $.ajax({
        type:"post",
        url:"../json/gp-renovation/conpany.json",
        data: {},
        dataType:"json",
        success:function (data) {
            // console.log(data.conpany);
            var conpany = data.conpany;
            var html = '';
            $.each(conpany,function (i, item) {
                html += ' <div class="conpanylist" onclick= conpanydetail();>';
                html += '<img src='+item.image+' alt="">';
                html += '<div class="conpanytext">'
                html += '<p>'+item.cname+'</p>'
                html += '<div class="starrow">'
                html += '<ul class="stars">'
                html += '<li><img src='+item.list+' alt=""></li>'
                html += '<li><img src='+item.list+' alt=""></li>'
                html += '<li><img src='+item.list+' alt=""></li>'
                html += '<li><img src='+item.list+' alt=""></li>'
                html += '<li><img src='+item.list+' alt=""></li>'
                html += '</ul>';
                html += '<span href="javascript:;">'+item.link+'</span>';
                html += '</div>';
                html += '<p>'+item.content+'</p>';
                html += '</div>';
                html += '</div>'

            });
            $(".conpanymid").html(html);
        }

    })
});