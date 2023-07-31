import './style-copy.css';
import { createHomePage } from "./home";
import {createMenuPage} from "./menu";
import {createContactsPage} from "./contacts";
import { createAPick } from './pick';
import data from "./pizzas.json";

console.log("hey, im alive btw");

const init = (() => {

    const navAddListeners = () => {
        const navElements = document.querySelectorAll(".nav-element");

        navElements.forEach(element => addEventListener("click", renderPage));
    };

    const renderPizzaPicks = () => {
        const picksHolder = document.querySelector(".picks");
        for (let i = 0; i < data.pizzas.length; i++) {
            const pizza = data.pizzas[i];
            const newPick = createAPick.createStaticPick(pizza.imagePath, pizza.name, pizza.ingredients, pizza.price, pizza.id);
            picksHolder.innerHTML = picksHolder.innerHTML + newPick;
            
        }
    }

    const renderPage = (e) => {
        //e.preventDeafult();

        const element = e.target;

        console.log(element);
        console.log(element.dataset.page);
        switch (element.dataset.page) {
            case "home":
                createHomePage.createHomeStatic();
                navAddListeners();
                renderPizzaPicks();
                break;
        
            case "menu":
                createMenuPage.createMenuStatic();
                navAddListeners();
                renderPizzaPicks();
                break;

            case "contact":
                createContactsPage.createContactsStatic();
                navAddListeners();
                break;

            default:
                createHomePage.createHomeStatic();
                navAddListeners();
                renderPizzaPicks();
                break;
        }
    }

    createHomePage.createHomeStatic();
    navAddListeners();
    renderPizzaPicks();
})();
