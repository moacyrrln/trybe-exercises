let numero1=987769;
let numero2=987766;
let array1=[];
let array2=[];
let aux1;
let aux2;
let i;
let resultado="";

for (i=numero1.toString().length-1;i>=0;i--)
{
    array1[i]=parseInt(numero1.toString().slice(i,i+1));
}

for (i=numero2.toString().length-1;i>=0;i--)
{
    array2[i]=parseInt(numero2.toString().slice(i,i+1));
}

while (array1.length>array2.length)
{
    array2.unshift(0);
}

while (array2.length>array1.length)
{
    array1.unshift(0);
}

for (key in array1)
{
    resultado=resultado.concat(array1[key]+array2[key]);
}

console.log(resultado);