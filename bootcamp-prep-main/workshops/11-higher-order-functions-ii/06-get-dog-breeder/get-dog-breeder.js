// YOUR CODE BELOW
function getDogBreeder(originalName, originalAge){
    let dogBreeder = function(name=originalName, age= originalAge){
        if(typeof name === 'number'){
            age = name;
            name = originalName;
        }

        let newDog={
            name: name,
            age: age
        };
        return newDog;
    }
    return dogBreeder;
}