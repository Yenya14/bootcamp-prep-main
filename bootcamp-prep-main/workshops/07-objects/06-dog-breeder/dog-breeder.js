// YOUR CODE BELOW
function dogBreeder(name='Steve', age=0) {
    if (typeof name === 'number') {
      age = name;
      name = 'Steve'
    }

    let newDog =  {
      name: name,
      age: age
    };
    
    return newDog;
  }