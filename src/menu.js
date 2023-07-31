const createMenuPage = (() => {
    
    const createMenuStatic = () => {
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
    <div class="menu">
        <div class="larger bold">Top picks:</div>
        <div class="picks">
            
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