const id = [1, 2, 3, 4, 5];
const char = ['a', 'b', 'c', 'd', 'e'];
const age = [10, 20, 30, 40, 50];

/**

[
    {
        id: 1,
        char: 'a',
        age: 10
    },
    {
        id: 2,
        char: 'b',
        age: 20
    },
    {
        id: 3,
        char: 'c',
        age: 30
    },
    {
        id: 4,
        char: 'd',
        age: 40
    },
    {
        id: 5,
        char: 'e',
        age: 50
    }
]

*/

const result = id.reduce((acc, curr, index) => {
  acc.push({
    id: curr,
    char: char[index],
    age: age[index],
  });
  return acc;
}, []);

console.log(result);
