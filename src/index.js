module.exports = function toReadable (number) {
    let num1 = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(" ");
    let num2 = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(" ");
    let rank = number%10;

    if (number < 20) {
        return num1[number];
    } else if (number < 100) {

}