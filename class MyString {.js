class MyString {
   reverse(str) {
       str = str.split('').reverse().join('')
       return str;
   }
   ucFirst(str) {
       let str1 = str[0].toUpperCase()
       str = str1 + str.slice(1);
       return str;
   }
   ucWords(str) {
      str = str.split('')
      let str2 =[]
      for(let i =0; i<str.length; i++){
         if(str[i-1]== ' '|| i==0){
            let nstr = str[i].toUpperCase()
            str2.push(nstr)
          }
         else{
            str2.push(str[i])
         }}
      str = str2.join('')
      return str
   }
}
let str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'