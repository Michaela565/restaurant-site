const createHomePage = (() =>{

    const createHomeStatic = () => {
        const content = document.querySelector('#content');
        let html = `<nav id="main-nav">
        <a class="logo" href="javascript:;">
            <img src="pizzeria-logo.svg" alt="pizzeria-logo">
            <div>Fancy</div>
        </a>
        <div class="navigation-links">
            <a href="javascript:;" class="nav-element bold" data-page="home">Home</a>
            <a href="javascript:;" class="nav-element bold" data-page="menu">Menu</a>
            <a href="javascript:;" class="nav-element bold" data-page="contact">Contact</a>
        </div>
    </nav>
    <div class="first-half">
        <img src="pizzeria-logo.svg" alt="logo">
        <div class="white-cover">
            <div class="fancy">
                Fancy pizzeria
            </div>
            <div>
                <div>Telephone: <div class="large bold">123 456 789</div></div>
                <div>Adress: Street 123, Town</div>
            </div>
        </div>
    </div>
    <div class="second-half">
        <div class="larger bold">Top picks:</div>
        <div class="picks">
            
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer>`;

        content.innerHTML = html.trim();
    }
    
    return{
        createHomeStatic
    }

})();

export {createHomePage}

