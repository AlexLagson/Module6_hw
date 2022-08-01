/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить 
в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
*/
let numsBetween = function (a, b) {
    let timer = setInterval (function () {
        if (a <= b) {
            console.log(a)
            a++
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
    numsBetween (5, 15);