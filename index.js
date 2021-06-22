function map(array, f){
    let newArray = [];
    for(let a of array){
      newArray.push(f(a));
    }
    return newArray
}

map([1, 2, 3, -9], function(a){ return -1 * a; } )

/*function reduce(array, f, e){
    if(e){
    for(let memo of array){
        e += memo;//f(e, memo);
    }
    return e
  } else {
    let sum = 0;
    for(let memo of array){
      sum += memo;//f(sum, memo);
    }
    return sum;
  }
}

console.log(reduce([1,2,3], function(e, memo){return e + memo;}, 100))

function reduce(array, f){
    let a = true;
      for(let memo of array){
          f(a, memo);
      }
      return a;
  }
  
  console.log(reduce([1, 2, true, "razmatazz", false], function(a, memo){ return !!a && !!memo;}))*/

  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }
