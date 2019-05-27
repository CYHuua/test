import zeroFill from './zero-fill'
export default function timeRemain(timestamp) { // 毫秒
    var remain = parseInt(timestamp / 1000);
    var d = Math.floor(remain / 86400);
    remain -= d * 86400;
    var h = Math.floor(remain / 3600);
    remain -= h * 3600;
    var m = Math.floor(remain / 60);
    var s = remain - m * 60;
    return {
        days: d,
        hours: zeroFill(h),
        minutes: zeroFill(m),
        seconds: zeroFill(s)
    }
}
