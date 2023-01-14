import './style.css';

export function pageHeader(){

  // Create DOM elements & append elements

  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const logo = document.createElement('img');
  const div = document.createElement('div');

  for (let i = 1; i < 4; i++) {
    const link = document.createElement('a');
    const li = document.createElement('li');
    li.classList.add('menu-items');
    li.appendChild(link);
    if (i === 1){
      link.innerText = 'Home';
      link.href = '#home';
    }
    if (i === 2){
      link.innerText = 'Menu';
      link.href = '#menu';
    }
    if (i === 3){
      link.innerText = 'Contact';
      link.href = '#contact';
    }
    ul.appendChild(li);
  }

  logo.src = 'assets/images/insect.png';
  h1.innerText = "Mr. Cricket's Bistro";

  h1.appendChild(logo);
  div.appendChild(h1);
  div.appendChild(nav);
  nav.appendChild(ul);
  header.appendChild(div);

  // Apply css classes/ids

  ul.classList.add('nav-bar');
  h1.classList.add('main-header');
  logo.id = 'logo';
  div.classList.add('nav-holder');

  return header;
};

