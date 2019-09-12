$(function () {
    $.ajax({
        type:"post",
        url:"../json/gp-renovation/designerdetail.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var casedata = data.casedata;
            var html = '';
            $.each(casedata,function (i,item) {
                html += '<div class="list" onclick=casedetail()>'
                html += ' <img src='+item.image+' alt="">'
                html += '<p>'+item.name+'</p>'
                html += '</div>'
            });
            $(".caselist").html(html);
        }
    })
})