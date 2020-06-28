function palindromic() {
    var max = 0;
    for(var i = 999; i > 99; i--) {
      for(var k = 999; k > 99; k--) {
        var n = i * k;
        var s = '' + n;
        if (s === s.split("").reverse().join("") && n > max) {
          max = n;
        }
      }
    }
    return max;
  }
  console.log(palindromic());

   