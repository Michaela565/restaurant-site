const createAPizza = (() => {

    const createStaticPizzaPick = (pizza) => {
        let ingredientsHtml = "";
        for (let i = 0; i < pizza.ingredients.length; i++) {
            const ingredient = pizza.ingredients[i];
            const ingredientHtml = `<li>${ingredient}</li>\n`;
            ingredientsHtml = ingredientsHtml + ingredientHtml;
        }

        const staticHtmlTemplate = `<div class="pick">
        <img src="${pizza.imagePath}" alt="pizza ${pizza.id}">
        <div class="information-pizza">
            <div class="large bold">${pizza.name} ${pizza.id}</div>
            <ul>
                ${ingredientsHtml}
            </ul>
            <div class="price large bolder">${pizza.price}</div>
        </div>
    </div>`;
        return staticHtmlTemplate.trim();
    }
    
    //const createNewPizzaJSON = (jsonData)

    return{
        createStaticPizzaPick,
    }
})();

export {createAPizza}