$(function () {
    $('.tab_box>li:last-of-type').hide();
    $(".banktitle>li").click(function () {
        var index = $(this).index();
        console.log(index);
        $(this).addClass("current").siblings().removeClass("current");
        $(".bankbox>li").eq(index).fadeIn().siblings().hide();

    });
    //append

        $('body').delegate('.cplistcot','load',function () {
            for (i=0;i<9;i++){
                $(this).append('<li class="swiper-slide"></li>');
            }
        });

    $.ajax({
        type:"post",
        url:"../json/finance/index.json",
        date:{},
        dataType:"json",
        success:function (data) {
            var sellist = data.sellist;
            var html = '';
            $.each(sellist,function (i, item) {
               html += '<li class="slist" onclick='+item.link+'>';
               html += '<img src='+item.image+' alt="">';
               html += ' <p>'+item.content+'</p>';
               html += '</li>';
            });
            $('.sellist').html(html);

            var storage = data.storage;
            var html = '';
            $.each(storage,function (i, item) {
                html += '<li class="swiper-slide">'
                html +=' <div class="bname">'+item.name+'</div>'
                html +='<p>'+item.pencent+'</p>'
                html +='<p>'+item.content+'</p>'
                html +='</li>'
            });
            $(".cplistcot").html(html);

            var cardlist = data.cardlist;
            var html = '';
            $.each(cardlist,function (i,item) {
                html += '<li class="swiper-slide card">'
                html += ' <img src='+item.image+' alt="">'
                html += '<p>'+item.name+'</p>'
                html += ' </li>'
            });
            $(".cplistcot2").html(html);

            var conduct = data.conduct;
            var html = '';
            $.each(conduct,function (i,item) {
                html += '<div class="conlist">';
                html += '<p>'+item.msg+'</p>';
                html += ' <p>'+item.pencent+'</p>';
                html += '<p>'+item.msg+'</p>';
                html += ' <div class="listinbox">'+item.type+'</div>';
                html += ' </div>';
            });
            $(".conlists").html(html);

            var insulist = data.insulist;
            var html = '';
            $.each(insulist,function (i, item) {
                html += '<div class="insulist">'
                html += '<div class="inlileft">'
                html += '<div class="imgcot">'+item.type+'</div>';
                html += '<img src='+item.image+' alt="">';
                html += '</div>';
                html += '<div class="inlimid">'
                html += '<p>'+item.name+'</p>'
                html += '<p>'+item.conpany+'</p>'
                html += '<p>'+item.number+'<span>'+item.start+'</span></p>'
                html += ' </div>'
                html += '<button class="inlibtn"><a href="'+item.url+'">'+item.btn+'</a></button>'
                html += ' </div>'
            });
            $(".insucot").html(html);

            var loanlist = data.loanlist;
            var html = '';
            $.each(loanlist,function (i, item) {
                html += '<div class="loanlist">'
                html += '<div class="loleft">'
                html += '<p><img src='+item.image+' alt=""><span>'+item.name+'</span></p>'
                html += '<p>'+item.price+'</p>'
                html += '<p>'+item.pricetext+'</p>'
                html += '</div>'
                html += ' <div class="lomid">'
                html += '<p>'+item.lixi1+'</p>'
                html += '<p>'+item.lixi2+'</p>'
                html += '</div>'
                html += '<button class="inlibtn"><a href="'+item.url+'">'+item.btn+'</a></button>'
                html += '</div>'
            });
            $(".loan").append(html);

            var msglist = data.msglist;
            var html = '';
            $.each(msglist,function (i,item) {
                html += '<div class="msglist">'
                html += '<div class="msgleft">'
                html += '<p>'+item.content+'</p>'
                html += '<p>'+item.viewtimes+''+item.spot+''+item.date+'</p>'
                html += '</div>'
                html += ' <div class="msgimg">'
                html += '<img src='+item.image+' alt="">'
                html += '</div>'
                html += '</div>'
            });
            $(".msglists").append(html);
        }
    })
})