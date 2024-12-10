const buttons = document.querySelectorAll(".btn1");
const submitButton = document.querySelector(".btn2");
let selectedValue = null;

for (const button of buttons) {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        for (const btn of buttons) {
            btn.classList.remove("changecolor");
        }

        button.classList.add("changecolor");

        selectedValue = button.innerHTML;
    });
}

if (submitButton) {
    submitButton.addEventListener("click", () => {
        if (selectedValue) {
            console.log("Bouton sélectionné :", selectedValue);
            localStorage.setItem("selectedValue", selectedValue);
            window.location.href = "./page2.html";
            console.log(selectedValues)
        } else {
            console.log("Aucun bouton n'a été sélectionné");
        }
    });
} else {
    console.error("Le bouton SUBMIT avec la classe .btn2 n'a pas été trouvé dans le DOM.");
}

