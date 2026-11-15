let youtube = document.getElementById("you");
let currentUrl = document.getElementById("curr");
let google = document.getElementById("goo");

// youtube.addEventListener('click',function(){
//     location.href = "https://www.linkedin.com/mynetwork/grow/" ;
// })


// currentUrl.addEventListener('click',function(){
//     alert(window.location.href) ;
// })


// google.addEventListener('click',function(){
//     // location.href = "https://www.google.com" ;
//     alert(location.hostname)
// })



youtube.addEventListener('click',function(){
    history.back();
})


currentUrl.addEventListener('click',function(){
    history.forward() ;
})


google.addEventListener('click',function(){
    // history.go(-3) ;
    alert(document.referrer)
})
