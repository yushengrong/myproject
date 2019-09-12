$(function () {
  function  build1(){
        $.ajax({
            type:"post",
            url:"../json/gp-renovation/case.json",
            data:{},
            dataType:"json",
            success:function (data) {
                var house = data.house;
                var html = '';
                $.each(house,function (i,item) {
                    html += ' <li class="house" onclick= casedetail();>';
                    html += ' <img src='+item.image+' alt="">';
                    html += ' <p>'+item.text+'</p>';
                    html += '<p>';
                    html += '<span><img src='+item.master+' alt=""><i>'+item.name+'</i></span>';
                    html += '<span><img src='+item.logo+' alt=""><i>'+item.times+'</i></span>';
                    html += '</p>';
                    html += '</li>'
                });
                $(".houselist").html(html);
            }
        });
    }
    function build2(){
        $.ajax({
            type: "post",
            url: "djgp/case.json",
            data: {},
            dataType: "json",
            success:function (data) {
                var houselist = data.houselist;
                var html = '';
                $.each(houselist,function (i, item) {
                    html += '<li class="onecase">';
                    html += '<img src='+item.image+' alt="">';
                    html += ' <p>'+item.type+'<span>'+item.price+'</span></p>';
                    html += ' <p>'+item.size+'<span>/</span>'+item.textsize+'</p>';
                    html += '</li>';
                });
                $('.houselist').html(html);
            }
        });
    }
    build1();
  $('.headlist>li').click(function () {
      var index = $(this).index();
      // alert(index);
      $('.headlist>li').eq(index).addClass('now').siblings().removeClass('now');
      if (index===0){
          $('.hidenav').hide();
          build1();
      } else if(index===1){
          $('.hidenav').show();
          build2();
      }
  })
});