

const menue_button = document.getElementById("menue");
//menue_button.style.backgroundColor = "red";

const menue = document.getElementById("menue_body");
//menue.style.display = "block";

function x (){
     if (menue.style.display === "none"){
         menue.style.cssText = "display: block;";
        //menue.style.backgroundColor = "red";
     } else {
         menue.style.display = "none";
     }
 }

menue_button.addEventListener("click", x);




// menue_button.style.cssText = "transform: rotate(90deg);    transition - duration: 3s;transform - origin: center; ";

// let typed = new Typed("#auto-typing", {
//     strings: [
//         "James Love",
//         "!!!",

//     ],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// });

