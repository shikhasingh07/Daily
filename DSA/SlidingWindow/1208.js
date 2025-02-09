var equalSubstring = function(s, t, maxCost) {
    
    let left = 0 ;
    let maxlen = 0;
    let curr = 0;

    for(let right = 0 ; right < s.length ; right ++ ){
        curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (curr > maxCost){
            curr -= Math.abs(s.charCodeAt(right) - t.charCodeAt(left));
            left ++;
        }

        maxlen = Math.max(right - left + 1, maxlen);
    }

    return maxlen;
};

console.log(equalSubstring('abcd','bcdf',3))