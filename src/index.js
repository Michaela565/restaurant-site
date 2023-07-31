import './style-copy.css';
import { createHomePage } from "./home";
import {createMenuPage} from "./menu";
import {createContactsPage} from "./contacts";
import data from "./pizzas.json";

console.log("hey, im alive btw");

const init = (() => {

    const navAddListeners = () => {
        const navElements = document.querySelectorAll(".nav-element");

        navElements.forEach(element => addEventListener("click", renderPage));
    };

    const renderPage = (e) => {
        //e.preventDeafult();

        const element = e.target;

        console.log(element);
        console.log(element.dataset.page);
        switch (element.dataset.page) {
            case "home":
                createHomePage.createHomeStatic();
                navAddListeners();
                break;
        
            case "menu":
                createMenuPage.createMenuStatic();
                navAddListeners();
                break;

            case "contact":
                createContactsPage.createContactsStatic();
                navAddListeners();
                break;

            default:
                createHomePage.createHomeStatic();
                navAddListeners();
                break;
        }
    }

    createHomePage.createHomeStatic();
    navAddListeners();
})();
