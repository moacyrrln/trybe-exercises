let a=-10, b=-20, c=-1, d=0, e=1, a1=30, a2=60, a3=90, nota=95, par1=1, par2=3, par3=7, custo=100, venda=200;
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

    a = str.toLowerCase();

    let resposta="o nome desta peça não existe no jogo de xadrez";

    if ( a == "peão" ) {resposta=a+" - O primeiro movimento pode ser 1 ou 2 casas para frente. Depois do primeiro movimento, somente uma 1 casa para frente"}
    if ( a == "torre" ) {resposta=a," - Horizontal ou Vertical"}
    if ( a == "cavalo" ) {resposta=a," - Movimento em L"}
    if ( a == "bispo" ) {resposta=a," - Movimento em diagonal"}
    if ( a == "dama" ) {resposta=a," - Movimento em diagonal, horizontal ou vertical"}
    if ( a == "rei" ) {resposta=a," - Qualquer direção, 1 casa"}
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
    else { resposta = venda*0.8-custo }

    return resposta;
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
console.log(porcentagem(nota));

console.log(par = ( par1 % 2 == 0 ) ||  ( par2 % 2 == 0 ) || ( par3 % 2 == 0 ));
console.log(par = ( par1 % 2 != 0 ) ||  ( par2 % 2 != 0 ) || ( par3 % 2 != 0 ));

console.log("Venda = "+venda," / Custo = "+custo+" / Lucro = "+lucro(custo,venda));

