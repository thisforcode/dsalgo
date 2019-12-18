function RomanToInteger(s){
 let hashTable = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
 let total = 0;
 for(let i=s.length-1;i>=0;i--){
   if(hashTable[s[i]] > hashTable[s[i-1]]){
     total = total + (hashTable[s[i]] - hashTable[s[i-1]]);
     i = i-1;
   }else{
     total = total + hashTable[s[i]];
   }
 }
 return total;
}

console.log(RomanToInteger('IIV'));
