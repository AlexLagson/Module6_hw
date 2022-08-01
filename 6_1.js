/*6.1 На этот раз оформите решение в виде функции, постарайтесь 
дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/
function arrCheck() {
    let randomArray = [1 , 2 , 4 , 5 , 6, 1, 0, 'alex',1, 0]; //7
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i =0 ; i < randomArray.length; i++){
        if (randomArray[i] === 0) {
            zero += 1
        } else if (typeof (randomArray[i]) !=='number') {
            console.log('В массиве есть не число');
        } else if (randomArray[i] % 2 === 0) {
            even += 1 }
        else {
            odd +=1}  
    }
    console.log (even);
    console.log (odd);
    console.log (zero);
    }
    arrCheck() 