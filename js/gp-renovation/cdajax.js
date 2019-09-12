$(function () {
    $.ajax({
        type:"post",
        url:"../json/gp-renovation/conpanydetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
           var userlist = data.userlist;
           var html = '';
           $.each(userlist,function (i, item) {
               html += '<div class="userlist">';
               html += ' <img src='+item.image+' alt="">';
               html += '<div class="usermessage">';
               html += '<p>'+item.name+'</p>';
               html += '<p>'+item.content+'</p>';
               html += '<p><span>'+item.time+'</span> · <span><a href="javascript:;"></a>回复TA</span></p>';
               html += '</div>';
               html += '<span class="'+item.class+'" onclick="dbclick()"></span>';
               html += '</div>'
           });
            $(".user").append(html);
        }
    });
    function list1() {
        $.ajax({
            type:"post",
            url:"../json/gp-renovation/conpanydetail.json",
            data:{},
            dataType:"json",
            success:function (data) {
                var intro = data.intro;
                var html = '';
                $.each(intro,function (i, item) {
                    html += ' <li class="intro">'+item.intromsg+'</li>';
                });
                $(".list").html(html);
            }
        })
    }
    function list2() {
        $.ajax({
            type:"post",
            url:"../json/gp-renovation/conpanydetail.json",
            data:{},
            dataType:"json",
            success:function (data) {
                var caselist = data.caselist;
                var html = '';
                $.each(caselist,function (i, item) {
                    html += '<li class="case">';
                    html += '<img src='+item.image+' alt="">';
                    html += '<p>'+item.text+'</p>';
                    html += '</li>';
                });
                $(".list").html(html);
            }
        })
    }
    function list3() {
        $.ajax({
            type:"post",
            url:"../json/gp-renovation/conpanydetail.json",
            data:{},
            dataType:"json",
            success:function (data) {
                var designer = data.designer;
                var html = '';
                $.each(designer,function (i, item) {
                    html += '<li class="designer">';
                    html += '<img src='+item.image+' alt="">';
                    html += '<p>'+item.name+'</p>';
                    html += ' <input type="button" value="联系TA">';
                    html += '</li>';
                });
                $(".list").html(html);
            }
        })
    }
    function list4() {
        $.ajax({
            type:"post",
            url:"../json/gp-renovation/conpanydetail.json",
            data:{},
            dataType:"json",
            success:function (data) {
                var effect = data.effect;
                var html = '';
                $.each(effect,function (i, item) {
                    html += '<li class="effect">';
                    html += '<img src='+item.image+' alt="">';
                    html += '</li>';
                });
                $(".list").html(html);
            }
        })
    }
    list1();
    $('.colutitle>li').click(function () {
        var index = $(this).index();
        if (index===0){
            list1();
        } else if (index===1){
            list2();
        } else if (index===2){
            list3();
        } else if (index===3){
            list4();
        }
    })

});