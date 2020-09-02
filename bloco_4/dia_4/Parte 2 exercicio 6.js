let N=5;

function soma(N)
{
    let soma=0;
    let i;

    for (i=1;i<=N;i++)
    {
        soma=soma+i;
    }
    return soma;
}

console.log(`N = ${N} / Soma = ${soma(N)}`);

