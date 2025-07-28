import homeTab from "./page-load";
import menuTab from "./menu";
import aboutTab from "./about";

function setTab(tabFn) {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(tabFn());
}

document.addEventListener("DOMContentLoaded", () => {
    const [homeBtn, menuBtn, aboutBtn] =
        document.querySelectorAll("nav button");
    homeBtn.addEventListener("click", () => setTab(homeTab));
    menuBtn.addEventListener("click", () => setTab(menuTab));
    aboutBtn.addEventListener("click", () => setTab(aboutTab));
    setTab(homeTab); // Default to Home
});
