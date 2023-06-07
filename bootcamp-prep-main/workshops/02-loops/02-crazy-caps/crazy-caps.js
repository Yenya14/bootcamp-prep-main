// YOUR CODE BELOW
debugger;
function crazyCaps(aString)
{
    newString="";
    for(let a=0; a<aString.length; a++){
        if(a%2===1){
        newString+=aString[a].toUpperCase();}
        else{
            newString+=aString[a]
        }
    }
    return newString;
}
console.log(crazyCaps("this is crazy"));
