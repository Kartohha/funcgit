let narc = (number)=>{
   number = String(number)
   str= number.split('')
   let res = 0
   let result = str.map((el)=>{
   res += Math.pow(el, str.length)
   return res
   })
   return res == Number(number) ? true : false
}
console.log(narc(7))
console.log(narc(371))
console.log(narc(1652))