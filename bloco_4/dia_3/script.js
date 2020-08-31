let n=4;
let auxd="";

console.log(`Exercício 1 / n = ${n}`);
for (l=0;l<n;l++)
{
    aux="";
    for (c=0;c<n;c++)
    {
        aux=aux.concat("*");
    }

    console.log(aux);
    
}

console.log();
console.log(`Exercício 2 / n = ${n}`);

for (l=0;l<=n;l++)
{
    aux="";
    for (c=0;c<l;c++)
    {
        aux=aux.concat("*");
    }

    console.log(aux);
    
}

console.log();
console.log(`Exercício 3 / n = ${n}`);

for (l=0;l<n;l++)
{
    for (l=0;l<n+1;l++)
    {
        aux="";
        for (c=0;c<n;c++)
        {
            if (c>=n-l)
            {
                aux=aux.concat("*");
            }
            else
            {
                aux=aux.concat(" ");
            }
            
        }
    
        console.log(aux);
        
    }
    
}

console.log();
console.log(`Exercício 4 / n = ${n}`);



    for (l=0;l<n+1;l++)
    {
        auxe="";
        for (c=0;c<n;c++)
        {
            if (c>=n-l)
            {
                auxe=auxe.concat("*");
            }
            else
            {
                auxe=auxe.concat(" ");
            }
            
        }
        
        if (l>1)
        {
            auxd="";
            for (c=0;c<l-1;c++)
            {
                auxd=auxd.concat("*");
            }
        }

        console.log(`${auxe}${auxd}`);
        
    }
    

