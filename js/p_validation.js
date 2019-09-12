/**
 * 名字 是什么类
 * 如何调用
 * isPhoneNo(数据)=false,true
 */
/*name*/
function p_isNmae(name){
    var contacts = /^[\u4e00-\u9fa5]{2,4}|[a-zA-Z]{2,16}$/g;
    return contacts.test(name);
}
/*phone*/
function p_isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
/*money*/
function p_isMoney(money){
    //var sum = /^(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/;
    var sum =  /^\d+(?=\.{0,1}\d+$|$)/;
    return sum.test(money)
}