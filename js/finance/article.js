$(function () {
    $.ajax({
        type:"post",
        url:"../json/finance/article.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var newslist = data.newslist;
            var html = '';
            $.each(newslist,function (i, item) {
                html += '<li class="newslist">';
                html += '<div class="newsleft">';
                html += '<p>'+item.content+'</p>';
                html += '<p><i>'+item.read+'</i><span>'+item.click+'</span><i>'+item.time+'</i></p>';
                html += ' </div>';
                html += '<img src='+item.image+' alt="">';
                html += '</li>';
            });
            $('.news').html(html);

        }
    })
});