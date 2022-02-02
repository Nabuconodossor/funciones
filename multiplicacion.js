
const userNum = parseInt(prompt("ingrese numero"))

const verificarNum = (num) => {


    return num > 20 || num < 1;

}  

if(!verificarNum(userNum)) {

    let a = 1;

    for (let i = 1; i <= userNum; i++){
        console.log(`${i} X ${userNum} = ${i*userNum}`);
        a = a * i;
        console.log(`Factorial de ${userNum} es: ${a}`);
    }
} else {
        console.log("numero fuera de rango");
}
