$(function () {
    $.ajax({
        type:"post",
        url:"../json/gp-renovation/index.json",
        data:{},
        dataType:"json",
        success:function (data) {
            // console.log(data.underlist);
            var underlist = data.underlist;
            var html = '';
            $.each(underlist,function (i,item) {
                html +='<li class="contentlist" onclick='+item.jump+'>';
                html +='<img src='+item.image+' alt="">';
                html +=' <p>'+item.logoname+'</p>';
                html +='</li>'
            });
            $(".contentlists").html(html);

            var caseshow = data.caseshow;
            var html = '';
            $.each(caseshow,function (i,item) {
                html +=' <div class="effectlist">'
                html +='<img src='+item.image+' alt="">'
                html +='</div>'
            });
            $(".effectlists").html(html);

            var casebox = data.casebox;
            var html = '';
            $.each(casebox,function (i, item) {
                html +='<div class="caselist">'
                html +='<img src='+item.image+' alt="">'
                html +='<p>'+item.content+'</p>'
                html +='</div>'
            });
            $(".caselists").html(html);

            var designer = data.designer;
            var html = '';
            $.each(designer,function (i, item) {
                html +=' <div class="memberlist">'
                html +='<img src='+item.image+' alt="">'
                html +='<p>'+item.name+'</p>'
                html +='<button onclick=" contact()">'+item.active+'</button>'
                html +='</div>'
            });
            $(".memberlists").html(html);

            var conpany = data.conpany;
            var html = '';
            $.each(conpany,function (i, item) {
                html +='<li class="swiper-slide">'
                html +='<img src='+item.image+' alt="">'
                html +='<p>'+item.cname+'</p>'
                html +='<p>'+item.label+'</p>'
                html +='</li>'
            });
            $(".cplistcot").html(html);

            var strategy = data.strategy;
            var html = '';
            $.each(strategy,function (i, item) {
                html += '<div class="strategylist">';
                html += '<div class="stralistleft">';
                html += '<p>'+item.content+'</p>';
                html += '<p>'+item.label+'</p>';
                html += '</div>';
                html += ' <div class="stralistimg">';
                html += ' <img src='+item.image+' alt="">';
                html += '</div>';
                html += '</div>';

            });
            $(".stracot").html(html);

            var master = data.master;
            var html = '';
            $.each(master,function (i, item) {
                html += ' <li>';
                html += '<div class="type">';
                html += ' <p>'+item.type+'</p>';
                html += ' </div>';
                html += '<img src='+item.image+' alt="">';
                html += '<p>'+item.name+'</p>';
                html += '<input type="button" value="联系TA">';
                html += '</li>';
            });
            $(".masterlists").html(html);

        }

    })
});