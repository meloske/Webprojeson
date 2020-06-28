var guessNumber = function(n) {
    let start = 1;
    let end = n;
        
    while(start < end) {
            let mid = Math.floor((start + end) / 2)
            let result = guess(mid);
            if (result === 0) 
                return mid;
            else if (result === -1)
                end = mid - 1;
            else
                start = mid + 1;
    }
        
    return start; 
};