let teste=[2, 4, 6, 7, 10, 0, -3];

function posicaodomaior(teste)
{
    let menor=teste[0];
    let posicao=0;

    for (key in teste)
    {
        if (teste[key]<menor)
        {
            menor=teste[key];
            posicao=key;
        }
    }

    console.log(posicao);
}

posicaodomaior(teste);