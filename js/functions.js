function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}

// Примеры использования функции
const string1 = 'Привет, мир!';
const string2 = 'Это очень длинная строка, которая превышает максимальную длину.';

const maxLength = 20;

console.log(checkStringLength(string1, maxLength)); // Вернет true, так как длина string1 меньше или равна 20
console.log(checkStringLength(string2, maxLength)); // Вернет false, так как длина string2 больше 20


function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("А роза упала на лапу Азора")); // Вернет true
console.log(isPalindrome("Hello, world!")); // Вернет false
