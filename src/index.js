module.exports = function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    const hundred = Math.floor(number / 100);
    const remainder = number - hundred * 100;

    let result = '';
    if (hundred > 0) {
        result += units[hundred] + ' hundred';
        if (remainder > 0) {
            result += ' ';
        }
    }
    if (remainder >= 10 && remainder <= 19) {
        result += secondTen[remainder - 10];
    } else if (remainder >= 20) {
        const ten = Math.floor(remainder / 10);
        const unit = remainder % 10;
        result += tens[ten] + (unit > 0 ? ` ${units[unit]}` : '');
    } else if (remainder > 0) {
        result += units[remainder];
    }
    return result.trim();
}