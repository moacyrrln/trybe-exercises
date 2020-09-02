let teste=[2, 3, 2, 5, 8, 2, 3];

function sortfunction(a, b)
{
    return (a - b);
}

//aux=teste.sort(function(a, b){return a-b});
//console.log(aux);


function qualmaisrepete(teste)
{
    let aux2=[];
    aux=teste.sort(function(a, b){return a-b}).slice();
    for (i in aux)
    {
        aux2[i]=1;

        for (j=aux.length-1;j>=parseInt(i)+1;j--)
        {
            if (aux[i]==aux[j])

            {
                aux2[i]=aux2[i]+1;
                aux.splice(j, 1);
            }
        }
    }

    for (i in aux)
    {
        console.log(`O elemento ${aux[i]} é repetido ${aux2[i]} vezes`)
    }

}

qualmaisrepete(teste);