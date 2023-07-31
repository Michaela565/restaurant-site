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
    
    const createNewPizzaJSON = (jsonData, name, ingredients, imagePath, price) => {
        const id = jsonData.pizzas.length - 1;

        const template = {
            "id" : id,
            "name" : name,
            "ingredients" : ingredients,
            "imagePath" : imagePath,
            "price" : price
        };
        
        jsonData.pizzas.push(template);
    }

    return{
        createStaticPizzaPick,
        createNewPizzaJSON,
    }
})();

export {createAPizza}