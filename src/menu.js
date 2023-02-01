import pestoCrickets from './assets/images/pesto-crickets.webp';
import hummusCrickets from './assets/images/hummus-cricket.webp';
import buffaloCrickets from './assets/images/buffalo-crickets.webp';
import gnocchyCrickets from './assets/images/gnocchy-cricket.webp';
import falafelCrickets from './assets/images/falafel-cricket.webp';
import mealWormBurrito from './assets/images/mealworm-burrito.webp';
import pudding from './assets/images/tuffy-pudding.webp';
import macaroons from './assets/images/cricket-macaroons.webp';
import antBeer from './assets/images/drink-ant.webp';
import incaCocktail from './assets/images/inca-cocktail.png';
import gangnam from './assets/images/gangnam-hopper.webp';

export function menuPage() {
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const menu = [
    {
      type: 'Appetizers',
      meals: [
        {
          dish: 'tomato tart with pesto crickets',
          image: pestoCrickets
        },
        {
          dish: 'hummus with harissa crickets',
          image: hummusCrickets
        },
        {
          dish: 'buffalo worm cauliflower wings',
          image: buffaloCrickets
        },        
      ],
    },
    {
      type: 'Entrees',
      meals: [
        {
          dish: 'crispy cricket gnocchi',
          image: gnocchyCrickets
        }, 
        {
          dish: 'cricket & quinoa falafel',
          image: falafelCrickets
        }, 
        {
          dish: 'bean chilli mealworm burrito',
          image: mealWormBurrito
        },         
      ]
    },
    {
      type: 'Dessert',
      meals: [
        {
          dish: 'mealworm sticky toffee pudding',
          image: pudding
        },
        {
          dish: 'chocolate cricket macarons',
          image: macaroons
        },             
      ]
    },
    {
      type: 'Drinks',
      meals: [
        {
          dish: 'hobgoblin beer (vermouth and ants)',
          image: antBeer
        },
        {
          dish: 'inca cocktail (tequila and buffalo worms)',
          image: incaCocktail
        },
        {
          dish: 'gangnam hopper (bourbon and crickets)',
          image: gangnam
        },        
      ]
    },
  ];

  // Create a meal section and append it to menu page

  for (let i = 0; i < menu.length; i++) {
    const menuSection = document.createElement('div');
    const sectionTitle = document.createElement('h2');
    menuSection.classList.add('menu-section');
    sectionTitle.innerText = menu[i].type;  // type of meal
    
    menuSection.appendChild(sectionTitle);
    menuContent.appendChild(menuSection);

    // Append each meal to corresponding type (e.g. Apps, Entrees...)

    for (let j = 0; j < menu[i].meals.length; j++) {
      const mealName = document.createElement('p');
      const image = document.createElement('img');
      image.classList.add('meal-img');

      mealName.innerText = menu[i].meals[j]['dish'];  // description
      image.src = menu[i].meals[j]['image'];  // picture

      menuSection.appendChild(image);
      menuSection.appendChild(mealName);     
    }
    menuContent.appendChild(menuSection);
  }

  return menuContent;
}
