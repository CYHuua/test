export default function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if(r != null){
    return encodeURIComponent(r[2]);
  }
  return null;
}
