// YOUR CODE BELOW
function billerBuilder(state){
    let finalPrice = function(price){
        if(state==='NY'){
            return (price * 1.03 * 1.04);
        }
        else if(state==='NJ'){
            return (price * 1.05 * 1.06625);
        }
    }
    return finalPrice;
}