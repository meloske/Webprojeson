/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if the string is empty, return ''
     if(!strs || strs.length === 0) {
         return ''
     }
     // sort strings by length in descending order.
     const sortedString = strs.sort((a,b)=> a.length < b.length);
     let commonPrefix = '';
     const longestString = strs[0]
     
     for(let i = 0; i<=longestString.length; i++) {
         
         const currentSubstring = longestString.substring(0,i+1);
         const isCommonPrefix = strs.every((singleString)=>singleString.startsWith(currentSubstring));
         
         if(isCommonPrefix) {
             commonPrefix = currentSubstring
         }
     }
     return commonPrefix
 };