var convert = function(s, numRows) {
    let len = s.length;
    if(numRows == 1) return s;
     let cycleLength  = numRows * 2 - 2;
    let aZig = [];
    for(let i=0;i<numRows; i++){
        for(let j=0; i+j<len; j=j+cycleLength){
            aZig.push(s.charAt(j+i));
        if(i!=0 && i!=numRows-1 && j+cycleLength-i < len){
            aZig.push(s.charAt(j+cycleLength-i));
        }
        }
    }
    return aZig.join('');
    
};

console.log(convert('JANUARYISFIRSTMONTH',3));
