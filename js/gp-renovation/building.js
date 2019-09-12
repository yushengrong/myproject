$(function () {
    $.ajax({
        type:"get",
        url:"../json/gp-renovation/building.json",
        data:{},
        dataType:"json",
        success:function (data) {
            var buildinglist = data.buildinglist;
            var html = '';
            $.each(buildinglist,function (i, item) {
                html += '<li>';
                html += '<a href="./material.html">';
                html += '<img src='+item.image+' alt="">';
                html += '<p>'+item.text+'</p>';
                html += '<span>'+item.type+'</span>';
                html += '</a>';
                html += '</li>';
            });
            $('.goodlist').html(html);
        }
    })
});