/*6.3 Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также
 принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
 */
 function firstFunc(firstNum) {
    function secondFunc(secondNum) {
        return firstNum + secondNum;
    }
    return secondFunc(2);
}
let result = firstFunc(5); 
console.log(result);