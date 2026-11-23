let student = {
    name : "areeb",
    age: 19,
    // city: "karachi"
}

// console.log(student);
// console.log(student.name);
// student.city = "karachi";
// console.log(student);

let student2 = Object.create(student);
console.log(student2);
console.log(student2.name);
student2.name = 'ali';
console.log(student2);
console.log(student);


//  let student2 = student;
//  console.log(student2);
//  console.log(student2.name);
//  student2.name = 'usman';
//  console.log(student2);
//  console.log(student);
 