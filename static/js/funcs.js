// 金额千分位化
function pricePermill (price) {
    var strReverse = function (str) {
        return str.split('').reverse().join('');
    }
    price = parseFloat(price.replace(/[^\d\.]/, '')).toFixed(2);
    var priceArr = price.split('.');
    var integer = priceArr[0];
    var decimal = priceArr[1];
    integer = strReverse(integer).replace(/([\d]{3})/g, '$1' + ',');
    var integerLen = integer.length;
    if (integerLen % 4 == 0) {
        integer = integer.substr(0, integerLen - 1);
    }
    integer = strReverse(integer);
    return integer + '.' + decimal;
}
// 合并对象至target
function merge (target) {
  for (var i = 0, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {}
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}