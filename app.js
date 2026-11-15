// let youtube = document.getElementById("you");
// let currentUrl = document.getElementById("curr");
// let google = document.getElementById("goo");

// // youtube.addEventListener('click',function(){
// //     location.href = "https://www.linkedin.com/mynetwork/grow/" ;
// // })


// // currentUrl.addEventListener('click',function(){
// //     alert(window.location.href) ;
// // })


// // google.addEventListener('click',function(){
// //     // location.href = "https://www.google.com" ;
// //     alert(location.hostname)
// // })



// youtube.addEventListener('click',function(){
//     history.back();
// })


// currentUrl.addEventListener('click',function(){
//     history.forward() ;
// })


// google.addEventListener('click',function(){
//     // history.go(-3) ;
//     alert(document.referrer)
// })


function checkName(){
//    let name = document.getElementById("name");
//    if(name.value.trim().length === 0){
//     alert("plzz Enter your last name");
//     name.focus();
//     return false;
//    }else{
//     alert(name.value.trim())
//    }
   

// let course = document.getElementById("course");
// if(course.selectedIndex === 0){
//     alert("plzz select a course")
//     return false;
// }


// let gender = document.getElementsByName("gender");
// for ( i = 0; i < gender.length; i++){
//     if(gender[i].checked){
//     return true;
// }
// }
//     alert("plzz select a gender ");
//     return false;


// let email = document.getElementById("email").value;
// if(email.includes("@")){
//     return true;
// }else{
//     alert("plzz enter a valid email")
//     return false
// }


 let zip = document.getElementById("zip").value;
if(zip.length < 5){
    alert("plzz enter a 5 digit zipcode")
    return false;
}

for ( i = 0; i < zip.length; i++){
    let numberCheck = Number(zip[i]);
    if (isNaN(numberCheck)){
        alert("plzz enter a digits only not alphabets")
        return false;
    }
}
}