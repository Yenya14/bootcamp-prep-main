// YOUR CODE BELOW
debugger;
function zooInventory(zoo) {
      let out = [];
      for (let i = 0; i < zoo.length; i++)
        // out.push(zoo[i][0] + ' the ' + zoo[i][1][0] + ' is ' + zoo[i][1][1] + '.');
        out.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`)
      return out;
    }
zooInventory(['King Kong', ['gorilla', 42]]);
