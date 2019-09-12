$(function () {
   $.ajax({
       type:"get",
       url:"../json/finance/information.json",
       data:{},
       dataType:"json",
       success:function (data) {
           var newslist = data.newslist;
           var html = '';
           $.each(newslist,function (i, item) {
               html += ' <div class="newslist" onclick="articlejump()">';
               html += '<div class="nlleft">';
               html += '<p>'+item.msg+'</p>';
               html += '  <p>'+item.view+'<span>'+item.point+'</span>'+item.time+'</p>';
               html += '</div>';
               html += '<div class="nlright">';
               html += ' <img src='+item.image+' alt="">';
               html += '</div>';
               html += '</div>';
           });
           $('.newsbox').html(html);
       }
   })
});