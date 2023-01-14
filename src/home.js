import image from './assets/images/bistro.jpeg';

export function homePage() {
  const mainContent = document.createElement('div');
  const mainImage = document.createElement('img');
  const intro = document.createElement('p');

  intro.innerHTML = "Since first opening its doors in 1485, Mr. Cricket's has endeavored to pride itself by creating first class mouth-watering insect-based dishes served up night after night by their expertly knowledgeable wait staff.  Nestled in the heart of Zambia's rain forest, Mr. Cricket's has been the go-to insect restaurant for over five hundred years. Tradition  and authenticity is the heart and soul of bug cuisine and since it's inception,  Mr. Cricket's has believed in sharing those traditions with its patrons. <br><br>Our wait staff will guide you on a 'culinary' journey through a selection of delicacies all starting with freshly handpicked insects.  This exquisite menu pleases any palate with  succulent carvings of the finest cuts of bug, fresh slugs, mouth-watering crickets, and heavenly mealworm desserts.   Buffalo worms lovers will rejoice at the breadth and versatility of Mr. Cricket's expertly selected cocktails which is paramount in rounding off your dining experience."

  mainContent.classList.add('mainContent');
  mainImage.id = 'bistro';
  mainImage.src = image;

  mainContent.appendChild(mainImage);
  mainContent.appendChild(intro);

  return mainContent;
}
