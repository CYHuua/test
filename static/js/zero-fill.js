export default function zeroFill (val) { // 补零
    return val < 10 ? '0' + val : val;
}
