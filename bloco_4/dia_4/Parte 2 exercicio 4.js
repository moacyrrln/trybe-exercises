let teste=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function posicaodomaior(teste)
{
    let maior=teste[0].length;
    let posicao=0;

    for (key in teste)
    {
        if (teste[key].length>maior)
        {
            maior=teste[key].length;
            posicao=key;
        }
    }

    console.log(teste[posicao]);
}

posicaodomaior(teste);