const searchInput = document.querySelector(".search__input")

const searchBtn = document.querySelector('.icon_search-btn')
const contentBox = document.querySelector(".content__box")
const boxingBtn = document.querySelector('.boxing__btn')

const Close = document.querySelector(".icon-kress")




async function getFood() {

    let html = ''
    let InputValue = searchInput.value
    console.log(InputValue)
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputValue}`)
    let json = await respone.json()

    console.log("c: ", json)

    if (json.meals) {
        json.meals.forEach((element, item) => {
            html += ` <div class='boxing'>
         <img src='${element.strMealThumb}' alt='not find foto' class='boxing__img'>
    <h1 class= 'boxong__title'> ${element.strMeal}</h1 >
    <button class=' boxing__btn',  onclick = getReaepts(${item}) >Get Recipe</button>
     </div > `
        });

        contentBox.innerHTML = html

    }

    else {

        html = `<div class ='notFind'>Sorry we didn’t find such food!! </div>`

        contentBox.innerHTML = html


        console.log("error")
    }

}



searchBtn.addEventListener('click', getFood)


async function getReaepts(index) {
    let html = ''
    let InputValue = searchInput.value
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputValue}`)
    let json = await respone.json()

    console.log("GETresept: ", json)

    json.meals.forEach((element, item) => {
        console.log(item)
        if (item == index) {
            console.log(element)
            html = `<div class='Ingredients'>
            <a href = './index.html'>
<img src='./icon/60578.png' class='icon-kress'> </a>

        <div class='Ingredients_menu'>
                <h1 class='Ingredients__titile'>${element.strMeal} </h1>
                <button class='Ingredients_texst'>
                    <p class="Ingredients__Category">${element.strCategory}</p>
                </button>

                <h1 class ='IngredientsName'>Ingredient</h1>
                <div class ="TopIngredient"> ${element.strIngredient1}</div>
                <div class ="TopIngredient"> ${element.strIngredient2}</div>
                <div class ="TopIngredient"> ${element.strIngredient3}</div>
                <div class ="TopIngredient"> ${element.strIngredient4}</div>
                <div class ="TopIngredient"> ${element.strIngredient5}</div>
                <div class ="TopIngredient"> ${element.strIngredient6}</div>
                <div class ="TopIngredient"> ${element.strIngredient8}</div>
                <div class ="TopIngredient"> ${element.strIngredient9}</div>
                <div class ="TopIngredient"> ${element.strIngredient10}</div>
                <div class ="TopIngredient"> ${element.strIngredient11}</div>
                <div class ="TopIngredient"> ${element.strIngredient12}</div>
                <div class ="TopIngredient"> ${element.strIngredient13}</div>
                <div class ="TopIngredient"> ${element.strIngredient14}</div>
                <div class ="TopIngredient"> ${element.strIngredient15}</div>
                <div class ="TopIngredient"> ${element.strIngredient16}</div>
                <div class ="TopIngredient"> ${element.strIngredient17}</div>


                <h1 class='Ingredients__name'>Inctruction</h1>
            </div>

            <div class='Ingredients__content'>${element.strInstructions}
            </div>
            <div class='footer'>
                <img src='${element.strMealThumb}' alt="not find foto" class='footer__foto'>
                <a href="${element.strYoutube}" target="_blank" class=' footer__video'><br>Watch Video</a>
            </div> `
        }

        contentBox.innerHTML = html

    })
}

