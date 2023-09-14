const users = [
  { firstName: 'Ram', lastName: 'Das', age: 26 },
  { firstName: 'Rohit', lastName: 'Sharma', age: 75 },
  { firstName: 'Sujit', lastName: 'Pal', age: 50 },
  { firstName: 'Sam', lastName: 'Das', age: 26 },
];

// {26 : 2, 75: 1, 50: 1}

const result = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(result);
