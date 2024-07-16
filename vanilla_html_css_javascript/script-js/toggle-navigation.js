const hamburger = document.querySelector("#hamburger");
const backdrop = document.querySelector("#backdrop");
const mobileNav = document.querySelector("#mobile-navigation");
const dropdownProfileInfo = document.querySelector("#dropdown-profile-info");

const navToggle = () => {
    backdrop.classList.toggle("active");
    mobileNav.classList.toggle("active");
};

hamburger.addEventListener("click", navToggle)
backdrop.addEventListener("click", navToggle)

function dropInfoToggle() {
    const arrowDropDownFileInfo = document.querySelector("#dropdown-profile-info-hide")

    // rotate arrow
    if (!arrowDropDownFileInfo.classList.contains("show")) {
        dropdownProfileInfo.style.transform = "rotate(180deg)"
    } else {
        dropdownProfileInfo.style.transform = "rotate(0deg)"
    }
    // show list of user option
    arrowDropDownFileInfo.classList.toggle("show")
}

dropdownProfileInfo.addEventListener("click", dropInfoToggle)