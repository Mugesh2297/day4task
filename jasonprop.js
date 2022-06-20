var obj1 = { name: "Person 1", age:5 };


var obj2 = { name: "Person 1", age:5 };
// Using JavaScript
JSON.stringify(obj1) === JSON.stringify(obj2); // false

// Using Lodash
//_.isEqual(obj1, obj2);