console.log('Human');

let number = 1;
console.log(number);

//module.exports = function toReadable (number) {
    
    
    
    
    function toReadable (number) { 
    let digit_low = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
        console.log([digit_low]);
    let digit_mid = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
        console.log([digit_mid]);
    let ost = number%10;  
    console.log(ost+'  '+'остаток'); 
    let dec = Math.floor(number/10); 
    console.log(dec+'  '+'десятки');
    let hun = Math.floor(number/100);  
    console.log(hun+'  '+'сотни');
    if (number>=0 && number<20) {return digit_low[number];
        } else if (number>19 && number<100 && ost===0) {
            console.log(digit_mid[number/10-2]);
            return digit_mid[number/10-2]; 
        } else if (number>19 && number<100 && ost!=0) {
            console.log(digit_mid[dec-2] + ' ' + digit_low[ost]);
            return digit_mid[dec-2] + ' ' + digit_low[ost];
            } else if (number===100) {
                console.log('hundred');
                return 'hundred';
// gooooood                
                } else if (number>100 && number<1000 && hun===0) {
                    console.log(digit_low[number/100]+' '+'hundred');
                    return digit_low[number/100]+' '+'hundred';
                    //} else 
                }
 
}
console.log(toReadable (99));