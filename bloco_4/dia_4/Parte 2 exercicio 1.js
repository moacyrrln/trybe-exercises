let word="acaca";

function verificaPalindrome(word){

    let aux="";

    for (i=word.length-1;i>=0;i--)
    {
        aux=aux.concat(word.substr(i,1));
    }

    if (word==aux)
    {
        return true;
    }
    else
    {
        return false;
    }

}

console.log(verificaPalindrome(word));



