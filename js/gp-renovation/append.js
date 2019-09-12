//append四个相同的内容
var index = 0;
for (var i = 0;i<4;i++){
    index = index + 1;
    $("html").append("<div class=\"designerlist\">\n" +
        "    <img src=\"../love/gp-renovation/designer1.png\" alt=\"\">\n" +
        "    <div class=\"listright\">\n" +
        "        <p><a href=\"designerdetail.html\">李哈克</a></p>\n" +
        "        <p>资深设计师/10年经验</p>\n" +
        "        <button onclick= contact()>联系TA</button>\n" +
        "    </div>\n" +
        "</div>\n");
}