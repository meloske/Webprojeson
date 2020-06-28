var longestOnes = function(A, K) {
    let f = 0;
    let s = 0;
    let result = 0;
    let count = 0;
    let zCount = 0;
    while(f < A.length) {
     
        if(A[f] === 0) {
            zCount = zCount +1
        }
       
        if(zCount === K+1){
            count = f-s;
            result = count > result ? count : result;
          
            while(zCount > K) {
                if(A[s] === 0) {
                    zCount = zCount -1
                }
                s = s+1;
            }
        }
        f = f +1;
    }
    
    count = f-s;
    result = count > result ? count : result;

    return result;
};