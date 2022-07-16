// human-readable

//console.log('Human');
//let number = 999;
//console.log(number);

module.exports = function toReadable (number) {
    
    
    let digit_low = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
 //       console.log([digit_low]);
    let digit_mid = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
 //       console.log([digit_mid]);
    let ost = number%10;  
 //   console.log(ost+'  '+'остаток'); 
    let dec = Math.floor(number/10); 
 //   console.log(dec+'  '+'десятки');
    let hun = Math.floor(number/100);  
//    console.log(hun+'  '+'сотни');
    if (number>=0 && number<20) {return digit_low[number];
        } else if (number>19 && number<100 && ost===0) {
//            console.log(digit_mid[number/10-2]);
            return digit_mid[number/10-2]; 
        } else if (number>19 && number<100 && ost!=0) {
//            console.log(digit_mid[dec-2] + ' ' + digit_low[ost]);
            return digit_mid[dec-2] + ' ' + digit_low[ost];
            } else if (number===100) {
//               console.log('hundred');
                return 'hundred';
                } else if (number>100 && number<1000 && number%100===0) {
//                    console.log(digit_low[hun]+' '+'hundred');
                    return digit_low[hun]+' '+'hundred';
                    } else if (number>100 && number<1000 && number-hun*100<20) {
//                        console.log(digit_low[hun]+' '+'hundred'+' '+digit_low[number-hun*100]);
                        return digit_low[hun]+' '+'hundred'+' '+digit_low[number-hun*100];
                        } else if (number>100 && number<1000 && number%10===0) {
//                            console.log(digit_low[hun]+' '+'hundred'+' '+digit_mid[(number%100)/10-2]);
                            return digit_low[hun]+' '+'hundred'+' '+digit_mid[(number%100)/10-2];
                            } else {
//                                console.log(digit_low[hun]+' '+'hundred'+' '+digit_mid[(number%100-ost)/10-2]+' '+digit_low[number%10]);
                                return digit_low[hun]+' '+'hundred'+' '+digit_mid[(number%100-ost)/10-2]+' '+digit_low[number%10];
                            }
}
///////////////
//console.log(toReadable (999));