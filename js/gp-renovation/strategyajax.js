$(function () {
    $.ajax({
        type:"post",
        url:"../json/gp-renovation/strategy.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var message = data.message;
            var html = '';
            $.each(message,function (i,item) {
                html += '<div class="listshow">'
                html += '<a href="">'
                html += '<img src='+item.image+' alt="">'
                html += '<div class="showtext">'
                html += '<p>'+item.content+'</p>'
                html += '<p>'+item.time+'</p>'
                html += '</div>'
                html += '</div>'
            });
            $(".big").append(html);
        }
    })
})