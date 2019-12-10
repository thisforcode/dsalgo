function longsubStr(s){
  var hash ={};
  let curr = 0;
  let max_length=0;
  for(let i=0;i<s.length;i++){
    if(hash[s[i]] == null){
      curr += 1;
    }else{
      curr = Math.min(i-hash[s[i]],curr+1);
    }
    max_length = Math.max(max_length, curr);
    hash[s[i]]=i;
  }
  return max_length;
}

console.log(longsubStr("abcdabcab"));
