// YOUR CODE BELOW
function onlyOdds(num)
{
    let sum=0
    for(let a=num; a>=1; a--){
        if(a%2===1){
            sum += a;
        }
    }
    return sum;
}