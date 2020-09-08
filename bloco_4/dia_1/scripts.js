let a=-10, b=-20, c=-1, d=0, e=1, a1=30, a2=60, a3=90, nota=95, par1=1, par2=3, par3=6, custo=100, venda=200, salario=3000;
let x="peão";
function adição(a,b){return a+b}
function subtração(a,b){return a-b}
function multiplicação(a,b){return a*b}
function divisão(a,b){return a/b}
function módulo(a){
    if (a>=0){return a} else  {return -a}}
function maior(a,b,c){
    if (a>=b && a>=c){return a}
    if (b>=a && b>=c){return b}
    if (c>=a && c>=b){return c}    
}
function sinal(a)
{
    if (a>0) { return "positive" }
    if (a<0) { return "negative" }
    if (a==0) { return "zero" }
    
}

function triangulo(a,b,c){
    if ( a <= 0 || a >= 180 || b <= 0 || b >= 180 || c <= 0 || c >= 180 ) { return "Ângulos inválidos"}
    else if (a+b+c==180) {resposta="Os ângulos "+a+", "+b+" e "+c+" representam os ângulos de um triângulo"; return resposta;}
    else { resposta="Os ângulos "+a+", "+b+" e "+c+" não representam os ângulos de um triângulo"; return resposta;}
}

function chess(str){

    let a = str.toLowerCase();

    let resposta="o nome desta peça não existe no jogo de xadrez";

    switch(a){
        case "peão":
            resposta=a+" - O primeiro movimento pode ser 1 ou 2 casas para frente. Depois do primeiro movimento, somente uma 1 casa para frente";
            break;
        case "torre":
            resposta=a+" - Horizontal ou Vertical"
            break;
        case "cavalo":
            resposta=a+" - Movimento em L"
            break;
        case "bispo":
            resposta=a+" - Movimento em diagonal"
            break;
        case "dama":
            resposta=a+" - Movimento em diagonal, horizontal ou vertical"
            break;
        case "rei":
            resposta=a+" - Qualquer direção, 1 casa"
            break;

    }

    return resposta;
}

function porcentagem(a){
    
    let resposta="valor de nota inválido";
    
    if (a>=90 && a<=100) {resposta = "A"}
    if (a>=80 && a<90) {resposta = "B"}
    if (a>=70 && a<80) {resposta = "C"}
    if (a>=60 && a<70) {resposta = "D"}
    if (a>=50 && a<60) {resposta = "E"}
    if (a>=0 && a<50) {resposta ="F"}

    return resposta;

}

function lucro(custo,venda){
    
    if ( custo <= 0 || venda <= 0) { resposta = "Valores inválidos para o Custo e/ou Venda" }
    else { resposta = venda-custo*1.2 }

    return resposta;
}

function salarioliquido(s){
    
    let INSS, IR=0;
    
    if (s<=1556.94) { INSS=s*0.08}
    if (s>1556.94 && s<=2594.92) { INSS=s*0.09}
    if (s>2594.92 && s<=5189.82) { INSS=s*0.11}
    if (s>5189.82) { INSS=570.88}

    if (s-INSS>=1903.99 && s-INSS<=2826.65) {IR=(s-INSS)*0.075-142.80}
    if (s-INSS>=2826.65 && s-INSS<=3751.05) {IR=(s-INSS)*0.15-354.80}
    if (s-INSS>=3751.05 && s-INSS<=4664.68) {IR=(s-INSS)*0.225-636.13}
    if (s-INSS>=4664.68) {IR=(s-INSS)*0.275-869.36}

    return s-INSS-IR;

}

console.log("("+a,") + (",b,") = ",adição(a,b));
console.log("("+a+") - (",b,") = ",subtração(a,b));
console.log("("+a+") * (",b,") = ",multiplicação(a,b));
console.log("("+a+") / (",b,") = ",divisão(a,b));
console.log("Módulo de "+a+" = ",módulo(a));
console.log("O maior valor entre "+a+", "+b+" e "+c+" é ",maior(a,b,c));
console.log("O sinal de "+c+" é ",sinal(c));
console.log("O sinal de "+d+" é ",sinal(d));
console.log("O sinal de "+e+" é ",sinal(e));
console.log(triangulo(a1,a2,a3));
console.log(chess(x));
console.log("A nota "+nota+" representa a letra "+porcentagem(nota));

console.log(par1,par2,par3,( par1 % 2 == 0 ) ||  ( par2 % 2 == 0 ) || ( par3 % 2 == 0 ));
console.log(par1,par2,par3,( par1 % 2 != 0 ) ||  ( par2 % 2 != 0 ) || ( par3 % 2 != 0 ));

console.log("Venda = "+venda," / Custo = "+custo+" / Lucro = "+lucro(custo,venda));
console.log("Salario Bruto = "+salario+" / Salario Líquido = "+salarioliquido(salario));
