# JavaScript library for enums

### Usage:
```
import Enum from 'enums-js';

const Color = new Enum('red', 'green', 'blue');

console.log(Color.keys()); // ['RED', 'GREEN', 'BLUE']
console.log(Color.RED.value); // 'red'
console.log(Color.RED == Color.GREEN); // false
console.log(Color.RED.value === 'red'); // true
console.log(Color.RED.ordinal); // 0
console.log(Color.BLUE.ordinal); // 2
```