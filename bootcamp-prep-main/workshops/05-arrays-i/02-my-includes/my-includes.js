// YOUR CODE BELOW
function myIncludes(array,searchValue)
{
    for(let i=0; i<array.length; i++){
        let value= array[i]
        if(value===searchValue){
            return true;
        }
      
    }
    return false;

}
