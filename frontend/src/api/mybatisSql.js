function mybatisBuild(textVa) {
    // 获取带问号的SQL语句
    var statementStartIndex = textVa.indexOf('Preparing: ');
    var statementEndIndex = textVa.length - 1;
    for (let i = statementStartIndex; i < textVa.length; i++) {
        if (textVa[i] == "\n") {
            statementEndIndex = i;
            break;
        }
    }
    var statementStr = textVa.substring(statementStartIndex + "Preparing: ".length, statementEndIndex);
    console.log(statementStr);
    //获取参数
    var parametersStartIndex = textVa.indexOf('Parameters: ');
    var parametersEndIndex = textVa.length - 1;
    for (let i = parametersStartIndex; i < textVa.length; i++) {
        if (textVa[i] == "\n") {
            parametersEndIndex = i;
            break;
        } else {
            console.log(textVa[i]);
        }
    }
    var parametersStr = textVa.substring(parametersStartIndex + "Parameters: ".length, parametersEndIndex);
    parametersStr = parametersStr.split(",");
    console.log(parametersStr);
    for (var i = 0; i < parametersStr.length; i++) {
        // 如果数据中带括号将使用其他逻辑
        let tempStr = parametersStr[i].substring(0, parametersStr[i].indexOf("("));
        // 获取括号中内容
        let typeStr = parametersStr[i].substring(parametersStr[i].indexOf("(") + 1, parametersStr[i].indexOf(")"));
        // 如果为字符类型
        if (typeStr === "String" || typeStr === "Timestamp") {
            statementStr = statementStr.replace("?", "'" + tempStr.trim() + "'");
        } else {
            // 数值类型
            statementStr = statementStr.replace("?", tempStr.trim());
        }
    }
    console.log(statementStr);
    document.getElementById("d1").innerHTML = statementStr;
    return textVa;
}
export default {mybatisBuild}
