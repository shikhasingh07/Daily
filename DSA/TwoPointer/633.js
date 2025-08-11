const squars = (c) =>{

    let left = 0 ;
    let right = Math.floor(Math.sqrt(c)); 

    while (left <= right){
        let sum = Math.pow(left, 2) + Math.pow(right, 2);
        if(sum === c){
            return true; 
        }
        else if(sum > c){
            right --; 
        }else {
            left ++ ; 
        }

    }
    return false;
}

console.log(squars(5))