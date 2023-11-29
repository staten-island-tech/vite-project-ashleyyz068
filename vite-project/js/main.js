import "../styles/style.css"
import { menu } from "./menu";
import { DOMSelectors } from "./Dom";
function clearCards() {
    const container = DOMSelectors.container;
    container.innerHTML = '';
}
insert(menu)
function insert(arr) {
    arr.map((menu) => DOMSelectors.container.insertAdjacentHTML("beforeend", `
    <div class="card">
          <img class="card-img" src="${menu.image}" alt="">
            <div class="des"> ${menu.name}</div>
            <h2> ${menu.price}</h2>
        </div>
    `)
    );
};

let buttons = document.querySelectorAll(".button-56");
buttons.forEach((buttons) => buttons.addEventListener("click",
    function () {
        let content = buttons.textContent
        let array = menu.filter((el) => el.type.includes(content))
        clearCards()
        insert(array)
    }));

document.getElementById("theme").addEventListener("click", function () {
    const body = document.body;
    if (body.classList.contains("chris")) {
        body.classList.remove("chris");
        body.classList.add("warm");
    } else {
        body.classList.remove("warm");
        body.classList.add("chris");
    }
});

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
});

