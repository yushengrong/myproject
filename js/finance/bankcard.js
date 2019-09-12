
$(function () {
    $(window).load(function () {
        for (i=0;i<4;i++){
            $(".nav").append("<li></li>")
        }
        $(".nav>li").css("display","none");
    });
        $.ajax({
            type: "post",
            url:"../json/finance/bankcard.json",
            data:{},
            dataType: "json",
            success:function (data) {
                var type = data.type;
                var html = '';
                $.each(type,function (i, item) {
                    html += '<ul class="hidebox">';
                    html += '<li>'+item.list1+'</li>';
                    html += '<li>'+item.list2+'</li>';
                    html += '<li>'+item.list3+'</li>';
                    html += '<li>'+item.list4+'</li>';
                    html += '<li>'+item.list5+'</li>';
                    html += '<li>'+item.list6+'</li>';
                    html += '<li>'+item.list7+'</li>';
                    html += '<li>'+item.list8+'</li>';
                    html += '</ul>';
                    html += '</div>';
                });
                $(".nav>li").eq(1).html(html);

                var bank = data.bank;
                var html = '';
                $.each(bank,function (i, item) {
                    html += ' <ul class="hidebox">'
                    html += '<li>'+item.list1+'</li>'
                    html += '<li>'+item.list2+'</li>'
                    html += '<li>'+item.list3+'</li>'
                    html += '<li>'+item.list4+'</li>'
                    html += '<li>'+item.list5+'</li>'
                    html += '<li>'+item.list6+'</li>'
                    html += '<li>'+item.list7+'</li>'
                    html += '<li>'+item.list8+'</li>'
                    html += '<li>'+item.list9+'</li>'
                    html += '<li>'+item.list10+'</li>'
                    html += '<li>'+item.list11+'</li>'
                    html += '<li>'+item.list12+'</li>'
                    html += '</ul>'
                    html += '</div>'
                });
                $(".nav>li").eq(2).html(html);

                var banklist = data.banklist;
                var html = '';
                $.each(banklist,function (i, item) {
                    html += '<a href="./bcdetail.html">'
                    html += '<div class="banklist">';
                    html += ' <img src='+item.image+' alt="">';
                    html += '<div class="bankmsg">';
                    html += '<p>'+item.name+'</p>';
                    html += ' <p>'+item.type+'</p>';
                    html += '</div>';
                    html += '</div>';
                    html += '</a>'
                });
                $(".banklists").append(html);


            }
        });

    });

    $(".titlebox>li").click(function () {
        var index = $(this).index();
        $(".nav>li").eq(index).toggle().siblings().hide();

        $(".titlebox>li").eq(index).toggleClass("lion").toggleClass("lioff");
        $(".titlebox>li").eq(index).siblings().removeClass("lion").addClass("lioff");
        $(".titlebox>li").eq(index).siblings().find("span").removeClass("on").addClass("off");

    });

