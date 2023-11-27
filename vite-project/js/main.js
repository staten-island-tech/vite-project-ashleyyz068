
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import javascriptLogo from '../javascript.svg'
// import viteLogo from '..public/vite.svg'
// import { setupCounter } from '../counter.js'
import "../styles/style.css"
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
import { menu } from "./menu"; 
import { DOMSelectors } from "./Dom";

// function remove () {
//     document.querySelectorAll("#container")
//     .forEach((vinyl) => vinyl.remove());
//   };
function clearCards() {
    const container = DOMSelectors.container;
    container.innerHTML = '';
  }

function insert (arr){
    arr.map((menu)=> DOMSelectors.container.insertAdjacentHTML("beforeend",`
    <div class="card">
          <img class="card-img" src="${menu.image}" alt="">
            <div class="des"> ${menu.name}</div>
            <p> ${menu.price}</p>
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

