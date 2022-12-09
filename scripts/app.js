// ! COMPONENTS

const modal = document.getElementById("modal");
const portal = document.getElementById("portal");

//* BTN
const navLink = document.getElementById("nav-link");
const close = document.getElementById("close");

navLink.addEventListener("click" , (e) =>{
    modal.style.display ="flex";
   portal.style.display ="flex";
});

close.addEventListener("click" , () => {
   modal.style.display ="none";
   portal.style.display ="none";

});