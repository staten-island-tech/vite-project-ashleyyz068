
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import javascriptLogo from '../javascript.svg'
// import viteLogo from '..public/vite.svg'
// import { setupCounter } from '../counter.js'
import "../styles/style.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import { menu } from "./menu"; 
import { DOMSelectors } from "./Dom";

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    button();
});

function milkTea (){
    const milk = menu.filter((menu)=> menu.type==="Milk Tea").map((menu)=> DOMSelectors.container.insertAdjacentHTML("beforeend",`
    <div class="card">
          <img class="card-img" src="${menu.image}" alt="">
            <h2> ${menu.name}</h2>
            <p> ${menu.price}</p>
        </div>
    `)

    );
    // .addEventListener('click', displayFilteredItems);
}
function button(){ 
    DOMSelectors.milk.addEventListener(`click`,milkTea )
}; 


