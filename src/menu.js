const createMenuPage = (() => {
    
    const createMenuStatic = () => {
        const content = document.querySelector('#content');
        let html = `<nav id="main-nav">
        <a class="logo" href="/">
            <img src="pizzeria-logo.svg" alt="pizzeria-logo">
            <div>Fancy</div>
        </a>
        <div class="navigation-links">
            <a href="/" class="nav-element bold"><div>Home</div></a>
            <a href="/" class="nav-element bold"><div>Menu</div></a>
            <a href="/" class="nav-element bold"><div>Contact</div></a>
        </div>
    </nav>
    <div class="menu">
        <div class="larger bold">Top picks:</div>
        <div class="picks">
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" alt="pizza 2">
                <div class="information-pizza">
                    <div class="large bold">Better pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
            <div class="pick">
                <img src="img/991307.jpg" alt="pizza 1">
                <div class="information-pizza">
                    <div class="large bold">Good pizza</div>
                    <ul>
                        <li>pepperoni</li>
                        <li>mushrooms</li>
                        <li>mozzarella</li>
                        <li>olives</li>
                    </ul>
                    <div class="price large bolder">7,20€</div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer> `;

        content.innerHTML = html.trim();
    }
    return{
        createMenuStatic
    }
})();

export {createMenuPage}