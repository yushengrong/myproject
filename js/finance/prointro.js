$(function () {
    $.ajax({
        type:"post",
        url:"../json/finance/prointro.json",
        data:{},
        dataType:"json",
      success:function (data) {
          var rule = data.rule;
          var html = '';
          $.each(rule,function (i, item) {
              html += ' <li class="rulelist">';
              html += ' <p>'+item.left+'</p>';
              html += ' <p>'+item.right+'</p>';
              html += '</li>';
          });
          $(".rulecot").html(html);
      }
    })
});