var areas =
    ['110000',
        '110101',
        '110102',
        '110103',
        '110104',
        '110105',
        '110106',
        '110107',
        '110108',
        '110109',
        '110111',
        '110112',
        '110113',
        '110114',
        '110115',
        '110116',
        '110117',
        '110228',
        '110229',
        '120000',
        '120101',
        '120102',
        '120103',
        '120104',
        '120105',
        '120106',
        '120107',
        '120108',
        '120109',
        '120110',
        '120111',
        '120112',
        '120113',
        '120114',
        '120115',
        '120221',
        '120223',
        '120225',
        '130000',
        '130100',
        '130102',
        '130103',
        '130104',
        '130105',
        '130107',
        '130108',
        '130121',
        '130123',
        '130124',
        '130125',
        '130126',
        '130127',
        '130128',
        '130129',
        '130130',
        '130131',
        '130132',
        '130133',
        '130181',
        '130182',
        '130183',
        '130184',
        '130185',
        '130200',
        '130202',
        '130203',
        '130204',
        '130205',
        '130207',
        '130208',
        '130223',
        '130224',
        '130225',
        '130227',
        '130229',
        '130230',
        '130281',
        '130283',
        '130300',
        '130302',
        '130303',
        '130304',
        '130321',
        '130322',
        '130323',
        '130324',
        '130400',
        '130402',
        '130403',
        '130404',
        '130406',
        '130421',
        '130423',
        '130424',
        '130425',
        '130426',
        '130427',
        '130428',
        '130429',
        '130430'];

//获取银行卡号不包括LunmCode
function getBankCardWithoutLunmCode(bank_no) {
    // bank_no 银行代码
    //控制位数. 19位的银行卡 cardinalNumber=12. 16位的银行卡 cardinalNumber=9
    var cardinalNumber = 12;
    var prefix = "";
    switch (bank_no) {
        case "102":
            prefix = "622202";
            break;
        case "103":
            prefix = "622848";
            break;
        case "105":
            prefix = "622700";
            break;
        case "301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "303":
            prefix = "622666";
            cardinalNumber = 9;
            break;
        case "305":
            prefix = "622622";
            break;
        case "306":
            prefix = "622556";
            break;
        case "308":
            prefix = "622588";
            cardinalNumber = 9;
            break;
        case "410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
            return '';
    }

    //生成不包括Luhm校验码的银行卡号
    var bankCardWithoutLunmCode = prefix;
    for (var j = 0; j < cardinalNumber; j++) {
        bankCardWithoutLunmCode += Math.floor(Math.random() * 10);
    }

    console.log(prefix);
    console.log(bankCardWithoutLunmCode);

    return bankCardWithoutLunmCode;
}


// 获取Luhn Code
function getLuhnCode(bankCardWithoutLunmCode) {
    if (bankCardWithoutLunmCode == '') return '';
    var no = bankCardWithoutLunmCode.split('').reverse().join('');

    // 定义奇数/偶数数据
    var addArr = new Array();
    var evenArr = new Array();

    // 奇数/偶数数组分开
    for (var i = 0; i < no.length; i++) {
        if (i % 2 == 0) {
            addArr[i / 2] = no[i];
        } else {
            evenArr[(i - 1) / 2] = no[i];
        }
    }

    //奇数数组内容x2
    // 如果乘以2得到的数字是两位,把这两位相加得到一位数字.
    // 如果相加后的内容时两位数,减去9.
    for (let j = 0; j < addArr.length; j++) {
        var temp = parseInt(addArr[j]) * 2;
        if (temp > 9) {
            temp = parseInt(String(temp).charAt(0)) + parseInt(String(temp).charAt(1));
            if (temp > 9) {
                temp = temp - 9;
            }
        }
        addArr[j] = temp;
    }


    //两个数组合并
    var arr = addArr.concat(evenArr);
    var oddEvenCount = 0;

    for (var j = 0; j < arr.length; j++) {
        oddEvenCount += parseInt(arr[j]);
    }

    console.log(oddEvenCount);

    //生成Lnhn code

    var LuhnCode = oddEvenCount % 10 == 0 ? 0 : (10 - oddEvenCount % 10);

    console.log(LuhnCode);

    return LuhnCode;

}

function getBankCard(bank_no) {
    var bankCardWithoutLunmCode = getBankCardWithoutLunmCode(bank_no);
    var bankCard = bankCardWithoutLunmCode + getLuhnCode(bankCardWithoutLunmCode) + "";

    console.log("银行卡号:", bankCard);

    return bankCard;

}

// 随机生成姓名
function getName() {
    var familyNames = new Array(
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    var givenNames = new Array(
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    var i = parseInt(Math.random() * 100);
    var familyName = familyNames[i];
    var j = parseInt(Math.random() * 100);
    var givenName = givenNames[i];
    var name = familyName + givenName;
    console.log("姓名", name);
    return name;
}

// 生成随机身份证号
function getIdCard(address, birthday) {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    if (!address) {
        address = "532326"; // 住址
    }
    if (birthday) {
        birthday = "19930319"; // 生日
    }
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;
    console.log("身份证", id_no_String);
    return id_no_String;
}

//生成随机手机号
function getMoble() {

    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];

    for (let j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix

    // var x = document.getElementsByName("mobile_tel");
    // for (let i = 0; i < x.length; i++) {
    //     var o = x[i];
    //     o.value = prefix;
    // }
}

// //  统一社会信用代码
// function isCreditCode(creditCode){
//     toastr.options.positionClass = 'toast-center-center';
//     toastr.options.timeOut = 1000;
//
//     creditCode = creditCode.toUpperCase();
//     if(creditCode.length!=18){
//         toastr.warning('信用代码证必须为18位!');
//         return false;
//     }
//
//     var sum = 0;
//     var arr=new Array();
//     arr=creditCode.split("");
//     for(var i=0;i<arr.length-1;i++){
//         var c=arr[i];
//         if(typeof(c)=="NaN"||typeof(c)=="undefined"){
//             toastr.warning('请输入正确的信用代码证!');
//             return false;
//         }
//         var a=getMapC(c);//获得代码对应数值
//         if(typeof(a)=="NaN"||typeof(a)=="undefined"){
//             toastr.warning('请输入正确的信用代码证!');
//             return false;
//         }
//         var b=getMapW((i+1).toString()); //获得当前位数权重
//         if(typeof(b)=="NaN"||typeof(b)=="undefined"){
//             toastr.warning('请输入正确的信用代码证!');
//             return false;
//         }
//         sum += a * b;
//         if(typeof(sum)=="NaN"||typeof(sum)=="undefined"){
//             toastr.warning('请输入正确的信用代码证!');
//             return false;
//         }
//     }
//
//     var mod=sum%31;
//     var res = getMapR((31-mod).toString());//计算校验码
//     if(typeof(res)=="NaN"||typeof(res)=="undefined"){
//         toastr.warning('请输入正确的信用代码证!');
//         return false;
//     }
//     console.info(res.toString());
//     console.info(arr[arr.length-1]);
//     if(arr[arr.length-1]!=(res.toString())){
//         toastr.warning('请输入正确的信用代码证!');
//         return false;
//     }
//     toastr.info('校验通过!');
//     return true;
// }

function getMapC(pa){
    var result;
    switch (pa) {
        case "0" :
            result=0;
            break;
        case "1" :
            result=1;
            break;
        case "2" :
            result=2;
            break;
        case "3" :
            result=3;
            break;
        case "4" :
            result=4;
            break;
        case "5" :
            result=5;
            break;
        case "6" :
            result=6;
            break;
        case "7" :
            result=7;
            break;
        case "8" :
            result=8;
            break;
        case "9" :
            result=9;
            break;
        case "A" :
            result=10;
            break;
        case "B" :
            result=11;
            break;
        case "C" :
            result=12;
            break;
        case "D" :
            result=13;
            break;
        case "E" :
            result=14;
            break;
        case "F" :
            result=15;
            break;
        case "G" :
            result=16;
            break;
        case "H" :
            result=17;
            break;
        case "J" :
            result=18;
            break;
        case "K" :
            result=19;
            break;
        case "L" :
            result=20;
            break;
        case "M" :
            result=21;
            break;
        case "N" :
            result=22;
            break;
        case "P" :
            result=23;
            break;
        case "Q" :
            result=24;
            break;
        case "R" :
            result=25;
            break;
        case "T" :
            result=26;
            break;
        case "U" :
            result=27;
            break;
        case "W" :
            result=28;
            break;
        case "X" :
            result=29;
            break;
        case "Y" :
            result=30;
            break;
    }
    return result;
}

function getMapW(pa){
    var result;
    switch (pa) {
        case "1" :
            result=1;
            break;
        case "2" :
            result=3;
            break;
        case "3" :
            result=9;
            break;
        case "4" :
            result=27;
            break;
        case "5" :
            result=19;
            break;
        case "6" :
            result=26;
            break;
        case "7" :
            result=16;
            break;
        case "8" :
            result=17;
            break;
        case "9" :
            result=20;
            break;
        case "10" :
            result=29;
            break;
        case "11" :
            result=25;
            break;
        case "12" :
            result=13;
            break;
        case "13" :
            result=8;
            break;
        case "14" :
            result=24;
            break;
        case "15" :
            result=10;
            break;
        case "16" :
            result=30;
            break;
        case "17" :
            result=28;
            break;
    }
    return result;
}

function getMapR(pa){
    var result;
    switch (pa) {
        case "0" :
            result="0";
            break;
        case "1" :
            result="1";
            break;
        case "2" :
            result="2";
            break;
        case "3" :
            result="3";
            break;
        case "4" :
            result="4";
            break;
        case "5" :
            result="5";
            break;
        case "6" :
            result="6";
            break;
        case "7" :
            result="7";
            break;
        case "8" :
            result="8";
            break;
        case "9" :
            result="9";
            break;
        case "10" :
            result="A";
            break;
        case "11" :
            result="B";
            break;
        case "12" :
            result="C";
            break;
        case "13" :
            result="D";
            break;
        case "14" :
            result="E";
            break;
        case "15" :
            result="F";
            break;
        case "16" :
            result="G";
            break;
        case "17" :
            result="H";
            break;
        case "18" :
            result="J";
            break;
        case "19" :
            result="K";
            break;
        case "20" :
            result="L";
            break;
        case "21" :
            result="M";
            break;
        case "22" :
            result="N";
            break;
        case "23" :
            result="P";
            break;
        case "24" :
            result="Q";
            break;
        case "25" :
            result="R";
            break;
        case "26" :
            result="T";
            break;
        case "27" :
            result="U";
            break;
        case "28" :
            result="W";
            break;
        case "29" :
            result="X";
            break;
        case "30" :
            result="Y";
            break;
        case "31" :
            result="0";
            break;
    }
    return result;
}


/*统一社会信用代码生成*/
function generatorCreditCode(){

    let regOrg = getRegOrgCode("9");//默认工商
    let orgtype = "1";//默认企业
    let num = parseInt(Math.random()*99);
    let area = areas[num];
    num = parseInt(((Math.random()*(99999999-10000000))+10000000));
    let ws = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += (num+"").charAt(i)* ws[i];
    }
    let C9 = 11 - (sum % 11);
    if (C9 == 11) {
        C9 = '0';
    } else if (C9 == 10) {
        C9 = 'X';
    } else {
        C9 = C9 + '';
    }
    let orgCode = num+""+C9;
    let code = regOrg+orgtype+area+orgCode;
    let str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    let wi =[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
    sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += getMapC(code.charAt(i))* getMapW((i+1).toString());
    }
    var C18 = 31 - (sum % 31);
    if (C18 == 31) {
        C18 = '0';
    }
     return code+getMapR(C18.toString());
}

/*获得登记机构*/
function getRegOrgCode(num){
    var result;
    switch(num){
        case "1":
            result=1; //机构编制
            break;
        case "2":
            result=2; //外交
            break;
        case "3":
            result=3; //教育
            break;
        case "4":
            result=4; //公安
            break;
        case "5":
            result=5; //民政
            break;
        case "6":
            result=6; //司法
            break;
        case "7":
            result=7; //交通运输
            break;
        case "8":
            result=8; //文化
            break;
        case "9":
            result=9; //工商
            break;
        case "10":
            result='A'; //旅游局
            break;
        case "11":
            result='B'; //宗教事务管理
            break;
        case "12":
            result='C'; //全国总工会
            break;
        case "13":
            result='D'; //人民解放军总后勤部
            break;
        case "14":
            result='E'; //省级人民政府
            break;
        case "15":
            result='F'; //地市级人民政府
            break;
        case "16":
            result='G'; //区县级人民政府
            break;
        case "17":
            result='Y'; //其他
            break;
    }
    return result;
}

/**
 * 生成组织机构代码
 */
function generatorOrgCode(){
    var max = 99999999;
    var min = 10000000;
    var num = parseInt(((Math.random()*(max-min))+min));
    var ws = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += (num+"").charAt(i)* ws[i];
    }
    var C9 = 11 - (sum % 11);
    if (C9 == 11) {
        C9 = '0';
    } else if (C9 == 10) {
        C9 = 'X';
    } else {
        C9 = C9 + '';
    }
    return num+"-"+C9;
}


// /**
//  * 验证组织机构合法性方法
//  */
// function orgCodeValidate(value) {
//     toastr.options.positionClass = 'toast-center-center';
//     toastr.options.timeOut = 1000;
//     if (value.trim() != "") {
//         var values = value.split("-");
//         var ws = [ 3, 7, 9, 10, 5, 8, 4, 2 ];
//         var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         var reg = /^([0-9A-Z]){8}$/;
//         if (!reg.test(values[0])) {
//             toastr.warning('错误的组织机构代码!');
//             return false;
//         }
//         var sum = 0;
//         for (var i = 0; i < 8; i++) {
//             sum += str.indexOf(values[0].charAt(i)) * ws[i];
//         }
//         var C9 = 11 - (sum % 11);
//         var YC9 = values[1] + '';
//         if (C9 == 11) {
//             C9 = '0';
//         } else if (C9 == 10) {
//             C9 = 'X';
//         } else {
//             C9 = C9 + '';
//         }
//         if(YC9 == C9){
//             toastr.info('正确的组织机构代码!');
//             return true;
//         }else{
//             toastr.warning('错误的组织机构代码!');
//             return false;
//         }
//     }else{
//         toastr.warning('请生成或者输入组织机构代码!');
//         return false;
//
//     }
// }

export default {
    getBankCard,
    getName,
    getIdCard,
    getMoble,
    generatorCreditCode,
    generatorOrgCode
}

