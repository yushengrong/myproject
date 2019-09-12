//
$(function () {
    $('.nav>li').click(function () {
        var index = $(this).index();
        $('.nav>li').eq(index).addClass('now').siblings().removeClass('now');
        $('.listbox').hide().stop().fadeIn();
        if (index === 0){
            $.ajax({
                type:"get",
                url:"../json/finance/loan.json",
                data:{},
                dataType:"json",
                success:function (data) {
                    var loanlist = data.loanlist;
                    var html = '';
                    $.each(loanlist,function (i, item) {
                        html += '<div class="loanlist" onclick='+item.link+'>';
                        html += '<div class="loleft">';
                        html += '<p><img src='+item.image+' alt=""><span>'+item.name+'</span></p>'
                        html += '<p>'+item.price+'</p>';
                        html += '<p>'+item.pricetext+'</p>';
                        html += '</div>';
                        html += ' <div class="lomid">';
                        html += '<p>'+item.lixi1+'</p>';
                        html += '<p>'+item.lixi2+'</p>';
                        html += '</div>';
                        html += '<button class="inlibtn"><a href="'+item.url+'">'+item.btn+'</a></button>'
                        html += '</div>'
                    });
                    $(".listbox").html(html);
                }

            });
        }else if (index === 1){
            $.ajax({
                type:"get",
                url:"../json/finance/loan.json",
                data:{},
                dataType:"json",
                success:function (data) {
                    var loanlist = data.loanlist;
                    var html = '';
                    $.each(loanlist,function (i, item) {
                        html += '<div class="loanlist" onclick='+item.link+'>'
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
                    $(".listbox").html(html);
                }

            });
        } else if (index === 2){
            $.ajax({
                type:"get",
                url:"../json/finance/loan.json",
                data:{},
                dataType:"json",
                success:function (data) {
                    var loanlist = data.loanlist;
                    var html = '';
                    $.each(loanlist,function (i, item) {
                        html += '<div class="loanlist" onclick='+item.link+'>'
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
                    $(".listbox").html(html);
                }

            });
        } else if (index === 3){
            $.ajax({
                type:"get",
                url:"../json/finance/loan.json",
                data:{},
                dataType:"json",
                success:function (data) {
                    var loanlist = data.loanlist;
                    var html = '';
                    $.each(loanlist,function (i, item) {
                        html += '<div class="loanlist" onclick='+item.link+'>';
                        html += '<div class="loleft">';
                        html += '<p><img src='+item.image+' alt=""><span>'+item.name+'</span></p>';
                        html += '<p>'+item.price+'</p>';
                        html += '<p>'+item.pricetext+'</p>';
                        html += '</div>';
                        html += ' <div class="lomid">';
                        html += '<p>'+item.lixi1+'</p>';
                        html += '<p>'+item.lixi2+'</p>';
                        html += '</div>';
                        html += '<button class="inlibtn"><a href="'+item.url+'">'+item.btn+'</a></button>';
                        html += '</div>';
                    });
                    $(".listbox").html(html);
                }
            });
        }
    });

    $('.nice-select').click(function(e){
        $('.nice-select').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });
    $('.nice-select').delegate("li","click",function (e) {
        var val = $(this).text();
        $(this).parents('.nice-select').find('input').val(val).parents('.nice-select').find('ul').hide();
        // $('.nice-selet ul').hide();
        e.stopPropagation();
    });
    $(document).click(function(){
        $('.nice-select ul').hide();
    });
    $.ajax({
        type:"get",
        url:"../json/finance/loan.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var loanlist = data.loanlist;
            var html = '';
            $.each(loanlist,function (i, item) {
                html += '<div class="loanlist" onclick='+item.link+'>'
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
            $(".listbox").html(html);

        }

    })

});
