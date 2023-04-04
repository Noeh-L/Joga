const loader = document.getElementById("loader-container");
const newMatchBtn = document.querySelector(".matchManager__newMatch");
const formContainer = document.querySelector(".form-container");
const formulaire = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-solid.fa-close");
const clearBtn = document.querySelector(".modal__content--actions-clear");
const matchTab = document.querySelector(".matchManager__myMatches--allMatches-contentScrollable-match");

// Ouvre la popup
newMatchBtn.addEventListener("click", (e) => {
    formContainer.style.display = "flex";
})

// Ferme la popup
formContainer.addEventListener("click", (e) => {
    formContainer.style.display = "none";
})
closeBtn.addEventListener("click", (e) => {
    formContainer.style.display = "none";
})
clearBtn.addEventListener("click", (e) => {
    formContainer.style.display = "none";
})

// Permet de garder la popup acrive même en cliquant dessus
formulaire.addEventListener("click", (e) => {
    e.stopPropagation()
})

// Loader 
window.addEventListener("load", (e) => {
    loader.style.display = "none";
});

// Ouvrir un match 
// matchTab.addEventListener("click", (e) => {
//     matchTab.style.display = "none";
// });
  
// Impossibilité de planifier une date antérieure à today :
let now = new Date();
let isoDateTime = now.toISOString().slice(0, 16);
document.getElementById('date').min = isoDateTime;
console.log(isoDateTime);