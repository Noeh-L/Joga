const loader = document.getElementById("loader-container");
const newMatchBtn = document.querySelector(".matchManager__newMatch");
const formContainer = document.querySelector(".form-container");
const formulaire = document.querySelector(".form");
const closeBtn = document.querySelector(".fa-solid.fa-close");
const clearBtn = document.querySelector(".form__actions--clear");

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
  