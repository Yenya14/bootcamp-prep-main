// YOUR CODE BELOW
function cloneMachine(obj){

    let objectClone = {
      name: obj.name + 'Clone',
      species: obj.species,
      offspring: []
    }
  
    obj.offspring.push(objectClone.name)
  
    return objectClone;
  
  }
  