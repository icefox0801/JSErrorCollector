// JSErrorCollector最简单版的实现
// #TODO: 增加扩展性
// #TODO: 兼容Safari
// #TODO: 封装主要功能
// #TODO: 兼容AMD、CMD、CommonJS规范
window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    var params = '';
    var img = new Image();
    img.crossOrigin = 'Anonymous';

    params += 'm=' + encodeURIComponent(errorMessage) || '';
    params += '&su=' + encodeURIComponent(scriptURI) || '';
    params += '&ln=' + lineNumber || '';
    params += '&cn=' + columnNumber || '';
    params += '&s=' + (errorObj && encodeURIComponent(errorObj.stack));
    params += '&w=' + document.documentElement.clientWidth;
    params += '&h=' + document.documentElement.clientHeight;

    img.src = 'http://localhost:8088/collect/e.gif?' + params;
};