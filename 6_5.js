/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
   Иначе говоря, умножает x на себя n раз и возвращает результат.
   */
   const powNum = (a, b) => {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  powNum (5, 2)
