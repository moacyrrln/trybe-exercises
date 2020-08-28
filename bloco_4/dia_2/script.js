let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0, impar=0, maior, menor;
let array=[], divisao=[], crescente=[], decrescente=[], nova=[], novateste=[];

for (n in numbers){
    console.log(numbers[n]);
    soma+=numbers[n];
}

console.log(`A soma dos elementos ${numbers} é ${soma}`);
console.log(`A quantidade de elementos ${numbers} é ${numbers.length}`);
console.log(`A média dos elementos ${numbers} é ${soma/numbers.length}`);

if(soma/numbers.length>20) { console.log(`A média dos elementos ${numbers} é maior que 20`); }
else if(soma/numbers.length<=20) { console.log(`A média dos elementos ${numbers} é menor ou igual a 20`); }

maior=numbers[0];
for (x in numbers){
    if (numbers[x]>maior) {maior=numbers[x]}
}
console.log(`O maior valor dos elementos ${numbers} é ${maior}`);

for (x in numbers){
    if (numbers[x] % 2 != 0) {impar++;}
}

console.log(`>Os elementos ${numbers} tem ${impar} número(s) ímpar(es)`);

if (impar==0) {console.log(`Os elementos ${numbers} não tem números ímpares`);}
else { console.log(`Os elementos ${numbers} tem ${impar} número(s) ímpar(es)`);}
//     console.log(`Os elementos ${numbers} tem ${impar} número(s) ímpar(es)`);

menor=numbers[0];
for (x in numbers){
    if (numbers[x]<menor) {menor=numbers[x]}
}
console.log(`O menor valor dos elementos ${numbers} é ${menor}`);

for (x=0;x<25;x++){
    array[x]=x+1;
    divisao[x]=array[x]/2;
}
console.log(`${array}`);
console.log(`${divisao}`);

let copia = numbers.slice();

for (i=0; i<numbers.length; i++){

    
    menor=copia[0];
    
    for (x in copia){
        if (copia[x]<menor) {menor=copia[x]}
    }

    crescente[i]=menor;

    copia.splice(copia.indexOf(menor),1);

}

console.log(crescente);

let copia2 = numbers.slice();

for (i=0; i<numbers.length; i++){

    
    maior=copia2[0];
    
    for (x in copia2){
        if (copia2[x]>maior) {maior=copia2[x]}
    }

    decrescente[i]=maior;

    copia2.splice(copia2.indexOf(maior),1);

}

console.log(decrescente);

for (x=0;x<numbers.length-1;x++)
{
    nova[x] = numbers[x]*numbers[x+1];
    novateste.push(numbers[x]*numbers[x+1]);
}

nova[x] = numbers[numbers.length-1]*2;
novateste.push(numbers[numbers.length-1]*2);

console.log(nova);
console.log(novateste);