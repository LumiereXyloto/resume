Array.prototype.myMap = function (fn, ctx) {
  let realThis = ctx || this
  let res = []
  let isArr = Object.prototype.toString.call(realThis) === '[object Array]'
  if (isArr) {
    realThis.reduce((prev, curr, index) => {
      console.log(curr)
      res.push(fn(curr))
    }, null)
    return res
  }
  throw new Error('arg2 must be an array')
}

console.log([1,2].myMap((a) => a*2))

function print(n){
  setTimeout((() => {
   console.log(n)
  })(n), Math.floor(Math.random() * 1000))
}
  for(var i = 0; i < 100; i++){
  print(i);
  }

