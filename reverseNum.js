function reverseNum(num){
  let reverseN = 0;
  let sign = num < 0 ? true :false;
  if(sign){
     num = Math.abs(num);

  }
     while(num){
       reverseN = (reverseN*10) + (num % 10);
       num = Math.floor(num/10);
     }
     return reverseN > 0x7FFFFFFF ? 0 : (sign ? (reverseN * (-1)) : reverseN);
     
}
console.log(reverseNum(-52697));
