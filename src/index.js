import './style.css';
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';
import insect from './assets/images/insect.png';
import github from './assets/images/github-alt.svg';

const content = document.getElementById('content');
const header = document.createElement('header');
const h1 = document.createElement('h1');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const logo = document.createElement('img');
const div = document.createElement('div');
const footer = document.createElement('footer');
const myGithub = document.createElement('img');

for (let i = 1; i < 4; i++) {
  const link = document.createElement('a');
  const li = document.createElement('li');
  li.classList.add('menu-items');
  li.appendChild(link);
  if (i === 1){
    link.innerText = 'Home';
    link.addEventListener('click', () => {
      content.textContent = '';
      content.appendChild(header);
      content.appendChild(homePage());
      content.appendChild(footer);
    });
  }
  if (i === 2){
    link.innerText = 'Menu';
    link.addEventListener('click', () => {
      content.textContent = '';
      content.appendChild(header);
      content.appendChild(menuPage());
      content.appendChild(footer);
    });
  }
  if (i === 3){
    link.innerText = 'Contact';
    link.addEventListener('click', () => {
      content.textContent = '';
      content.appendChild(header);
      content.appendChild(contactPage());
      content.appendChild(footer);
    });
  }
  ul.appendChild(li);
}

logo.src = insect;
myGithub.src = github;
h1.innerText = "Mr. Cricket's Bistro";
footer.innerHTML = `
<p><a href="https://github.com/jjmarrue/" target="_blank"><img src=`+github+`></a></p>
<p>Copyright &copy; 2023 Juan Mata</p>
<p>A personal project created for the <a href="https://www.theodinproject.com/" target="_blank">Odin Project</a>.</p>
`;

h1.appendChild(logo);
div.appendChild(h1);
div.appendChild(nav);
nav.appendChild(ul);
header.appendChild(div);
content.appendChild(header);
content.appendChild(homePage());
content.appendChild(footer);

ul.classList.add('nav-bar');
h1.classList.add('main-header');
logo.id = 'logo';
div.classList.add('nav-holder');
footer.classList.add('foot');