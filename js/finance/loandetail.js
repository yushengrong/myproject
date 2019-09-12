$(function () {
    $.ajax({
        type:"get",
        url:"../json/finance/loandetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var condition = data.condition;
            var html = '';
            $.each(condition,function (i, item) {
                html += ' <li>'+item.id+'<span>'+item.condition+'</span></li>'
            });
            $('.condition').append(html);

            var need = data.need;
            var html = '';
            $.each(need,function (i,item) {
                html += ' <li>'+item.id+'<span>'+item.data+'</span></li>'
            });
            $('.needdata').append(html);
        }
    })
});