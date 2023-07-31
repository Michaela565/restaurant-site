const createContactsPage = (() => {

    const createContactsStatic = () => {
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
    <div class="contacts">
        <div class="larger bold">Contact:</div>
        <div class="contact-list">
            <div class="pick">
                <div class="information-pizza">
                    <ul>
                        <li class="contacts-padding"><div class="bold inline">Telephone:</div> 123 456 789</li>
                        <li class="contacts-padding"><div class="bold inline">Email:</div> randomemail123@randomdomain.com</li>
                        <li class="contacts-padding"><div class="bold inline">Address:</div> Random Street 123, Random City, Random </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div>Tel: 123 456 789</div>
        <div>Created by <a href="https://github.com/Michaela565">Michaela Kurcikova</a> 2023</div>
    </footer>`;

        content.innerHTML = html.trim();
    }

    return {
        createContactsStatic,
    }
})();

export {createContactsPage}