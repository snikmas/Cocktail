const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
document.querySelector('.go').addEventListener('click', fetchCall);
// document.querySelector('.random').addEventListener('click', fetchCall);

function fetchCall() {

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(datas => {
    datas.drinks.forEach((data) => {
      // console.log(datas.drinks)
      let name = document.querySelector('.name').value;
      // console.log(name)

      const image_drink = document.createElement('img');
      const name_drink = document.createElement('p');
      let grid_element = document.createElement('div');
      // console.log(grid_element)

      image_drink.src = data.strDrinkThumb;
      name_drink.innerHTML = data.strDrink;
      // console.log(image_drink, name_drink)
      grid_element.appendChild(image_drink);
      grid_element.appendChild(name_drink);
      document.querySelector('.results_grid').appendChild(grid_element);

      // console.log(grid_element);
      // console.log(grid_element.innerHTML);
     
  })
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
    
  }
  