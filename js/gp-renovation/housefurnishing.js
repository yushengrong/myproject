$(function () {
    $.ajax({
        type:"get",
        url:"../json/gp-renovation/housefurnishing.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var tile = data.tile;
            var html = '';
            $.each(tile,function (i, item) {
                html += '<li>';
                html += '<img src='+item.image+' alt="">';
                html += '<p>'+item.text+'</p>';
                html += '</li>';
            });
            $('.goodlist').html(html);
        }
    })
});