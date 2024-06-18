const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const categories = [];

function generateCategories() {
  fetch(url) 
  .then(res => res.json())
  .then(datas => {
    datas.drinks.forEach((category) =>
      categories.push(category)
    )
    
    console.log(category);
  })
}