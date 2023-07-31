const createAPick = (() => {

    const createStaticPick = (picturePath, name, ingredients, price, id) => {
        let ingredientsHtml = "";
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient = ingredients[i];
            const ingredientHtml = `<li>${ingredient}</li>\n`;
            ingredientsHtml = ingredientsHtml + ingredientHtml;
        }

        const staticHtmlTemplate = `<div class="pick">
        <img src="${picturePath}" alt="pizza ${id}">
        <div class="information-pizza">
            <div class="large bold">${name} ${id}</div>
            <ul>
                ${ingredientsHtml}
            </ul>
            <div class="price large bolder">${price}</div>
        </div>
    </div>`;
        return staticHtmlTemplate.trim();
    }
    
    return{
        createStaticPick,
    }
})();

export {createAPick}