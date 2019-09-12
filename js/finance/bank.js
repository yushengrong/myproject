$(function () {
    $.ajax({
        type:"post",
        url:"../json/finance/bank.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var bank = data.bank;
            var html = '';
            $.each(bank,function (i, item) {
                html += '<a href="./bankdetail.html">'
                html += '<div class="bank">';
                html += '<img src='+item.image+' alt="">';
                html += '<p>'+item.cname+'</p>';
                html += '<div class="rightmsg">';
                html += '<p>'+item.number+'</p>';
                html += '<p>'+item.cot+'</p>';
                html += ' </div>';
                html += ' </div>';
            });
            $(".banks").html(html);
        }
    })
})