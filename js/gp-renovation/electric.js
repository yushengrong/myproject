$(function () {
    $.ajax({
        type:"get",
        url:"../json/gp-renovation/electric.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var tile = data.tile;
            var html = '';
            $.each(tile,function (i, item) {
                html += '<li>';
                html += '<a href="./good_detail.html">';
                html += '<img src='+item.image+' alt="">';
                html += '<p>'+item.text+'</p>';
                html += '</a>';
                html += '</li>';
            });
            $('.goodlist').html(html);
        }
    })
});