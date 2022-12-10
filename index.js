

let saldo = 5000
alert(`Seu saldo é de ${saldo}`);
let saque = Number.parseInt(prompt('Insira um vaslor inteiro, positivo, e menor que seu saldo para sacar:'));
let notas50 = 0
let notas10 = 0
let notas5 = 0
let notas1 = 0

if(saque<saldo && saque>0){
    while(saque>=50){
        saque-=50;
        notas50++
    }

    while(saque>=10){
        saque-=10;
        notas10++
    }

    while(saque>=5){
        saque-=5;
        notas5++
    }

    while(saque>0){
        saque-=1;
        notas1++
    }

    console.log('A quantidade de notas do seu saque será:');
    console.log(`GC$ 50 --> ${notas50}`);
    console.log(`GC$ 10 --> ${notas10}`);
    console.log(`GC$ 5 --> ${notas5}`);
    console.log(`GC$ 1 --> ${notas1}`);

}else{
    console.log('Valor do saque superior ao do saldo em conta!');
}