import "../styles/style.css"
import { menu } from "./menu"; 
import { DOMSelectors } from "./Dom";
function clearCards() {
    const container = DOMSelectors.container;
    container.innerHTML = '';
  }

function insert (arr){
    arr.map((menu)=> DOMSelectors.container.insertAdjacentHTML("beforeend",`
    <div class="card">
          <img class="card-img" src="${menu.image}" alt="">
            <div class="des"> ${menu.name}</div>
            <h2> ${menu.price}</h2>
        </div>
    `)
    );
};

DOMSelectors.milk.addEventListener(`click`, function (){
    clearCards(); 
    const milk = menu.filter((menu)=> menu.type==="Milk Tea")
    insert (milk); 
})
DOMSelectors.winter.addEventListener(`click`,function (){
    clearCards(); 
    const winter = menu.filter((menu)=> menu.type==="Winter Limited")
    insert (winter); 
 })
DOMSelectors.fall.addEventListener(`click`,function (){
    clearCards(); 
    const fall = menu.filter((menu)=> menu.type==="Fall Limited")
    insert (fall); 
 })
DOMSelectors.specials.addEventListener(`click`,function (){
    clearCards(); 
    const specials = menu.filter((menu)=> menu.type==="Specials")
    insert (specials); 
 })


DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
});


    document.getElementById("theme").addEventListener("click", function() {
        const body = document.body;
        if (body.classList.contains("chris")) {
          body.classList.remove("chris");
          body.classList.add("warm");
        } else {
          body.classList.remove("warm");
          body.classList.add("chris");
        }
      });