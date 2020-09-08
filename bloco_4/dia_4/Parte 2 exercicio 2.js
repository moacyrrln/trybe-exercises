let teste=[2, 3, 6, 7, 10, 1];

function posicaodomaior(teste)
{
    let maior=teste[0];
    let posicao=0;

    for (key in teste)
    {
        if (teste[key]>maior)
        {
            maior=teste[key];
            posicao=key;
        }
    }

    console.log(posicao);
}

posicaodomaior(teste);