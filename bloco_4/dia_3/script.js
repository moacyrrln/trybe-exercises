let n=10;
let m=9;


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


console.log();
console.log(`Bonus 4 / m = ${m}`);
d=Math.trunc(m/2);
e=Math.trunc(m/2);


for (l=0;l<Math.trunc(m/2);l++)
{
    auxe="";
    for (c=0;c<=Math.trunc(m/2);c++)
    {
        if (c==e)
        {
            auxe=auxe.concat("*");
            e--;
        }
        else
        {
            auxe=auxe.concat(" ");
        }

        
    }
    
    auxd="";
    //if (l>0)
    {
        auxd="";
        for (c=Math.trunc(m/2)+1;c<=m;c++)
        {
            if (c-l==Math.trunc(m/2))
            {
                auxd=auxd.concat("*");
            }
            else
            {
                auxd=auxd.concat(" ");
            }        
        }
    }

    console.log(`${auxe}${auxd}`);

}
aux="";
    for (x=1;x<=m;x++)
    {
        aux=aux.concat("*");
    }
    console.log(`${aux}`);


console.log();
console.log(`Bonus 2 - Número Primo`);

for (let verprimo=1;verprimo<=7;verprimo++)
{
    ehprimo=true;

    for (x=2;x<verprimo;x++)
    {
        if (verprimo % x == 0)
        {
            ehprimo=false;
        }
    }

    if (ehprimo)
    {
        console.log(`O número ${verprimo} é um número primo`);
    }
    else
    {
        console.log(`O número ${verprimo} não é um número primo`);
    }
}