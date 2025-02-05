var minFlips = function (s) {
  let oth = 0;
  let fth = 0 ;
  let n = s.length; 
  let newS = s + s;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
     if(newS[i] !== (i % 2 === 0 ? '0' : '1')) oth++;
     if(newS[i] !== (i % 2 === 0 ? '1' : '0')) fth++; 
  }
  min = Math.min(oth , fth);

  for(let i = n ; i < 2 * n ; i++){
    // 5 - 5 = 0 
    if(newS[i-n] !== ((i-n) % 2 === 0 ? '0' : '1')) oth--;
    if(newS[i-n] !== ((i-n) % 2 === 0 ? '1' : '0')) fth--;
     
    if(newS[i] !== (i % 2 === 0 ? '0' : '1')) oth++; 
    if(newS[i] !== (i % 2 === 0 ? '1' : '0')) fth++; 

    min = Math.min(min , oth , fth);
  }
  return min ;
};

console.log(minFlips("111000"));
