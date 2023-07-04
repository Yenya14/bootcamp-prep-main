// YOUR CODE BELOW
function reverseArray(arr) {
    let holder = []
    for (let i = 0; i < arr.length; i++) {
      holder.push(arr.shift())
    }
    for (let j = 0; j <= holder.length; j++) {
      arr.push(holder.pop())
    }
    return arr
  }