// YOUR CODE BELOW
function whosASpecial(pets){
    let results=[];

    pets.forEach(pushString);

    function pushString(specialPets){
        results.push(`${specialPets.name} the ${specialPets.species} is very special!`);
    }
    return results.join(' ');
}
