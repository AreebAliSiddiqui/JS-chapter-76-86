let student = {
    name : "areeb",
    age: 19,
    
}

let details = {
    city: "karachi",
    course: 'web',

}

// console.log(student);
// console.log(student.name);
// student.city = "karachi";
// console.log(student);

// let student2 = Object.create(student);
// console.log(student2);
// console.log(student2.name);
// console.log(Object.hasOwn(student2,"name"));
// student2.name = 'ali';
// console.log(Object.hasOwn(student2,"name"));
// console.log(student2);
// console.log(student);


//  let student2 = student;
//  console.log(student2);
//  console.log(student2.name);
//  student2.name = 'usman';
//  console.log(student2);
//  console.log(student);
 

// ------------------object js build in Methods ----------------------------------------

// 1 Object.assign()
// Object.assign(student,details);
// console.log(student);
// console.log(Object.hasOwn(student,"city"));
// console.log(Object.hasOwn(details,"city"));
// console.log(details.hasOwnProperty("name"));


// 2 Object.keys()
// console.log(Object.keys(student))

// // 3 Object.values()
// console.log(Object.values(student))


// 4 Obejct.entries()
// console.log(Object.entries(student));

// 5 Object.freeze()
// Object.freeze(student);
// student.country = "pakistan";
// delete student.city;
// student.name = "farzan";
// console.log(student);


// 6 Object.seal()
// Object.seal(student);
// student.country = "pakistan";
// delete student.city;
// student.name = "farzan";
// console.log(student);

// 7 Object.hasOwn()
// console.log(Object.hasOwn(student,"name"));





// ------------------------Try and catch----------------------------------------

// let userName = "arreb"
// try{
//     console.log(userName);
    
// }catch(err){
//     console.log(err);
//     console.log("plzz defined a username first");
    
    
// }



let form = document.getElementById("registrationForm");

form.addEventListener('submit',function(event){
 event.preventDefault();


let userName = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let userAge = document.getElementById("age").value;
let message = document.getElementById("message")

try{
    if(userName.trim() === ""){
        throw "Name is required!"
    }else if(userEmail.trim().length === 0){
         throw "Email is required!"
    }else if(!userEmail.includes("@") || !userEmail.includes(".") || userEmail.includes(" ")){
        throw "Email must contain @,'.', and cannot contain spaces"
    }else if(userAge.trim() === ""){
        throw "plzz enter your age"
    }else if(userAge < 18 || userAge > 99){
        throw "You must be 18 or older!"
    }

    message.innerHTML = "Rejistration Successful"
    
}
catch(err){
message.innerHTML = err;
 
}
})