import Logo from './assets/images/insect.png';


const body = document.getElementsByTagName('body');
const content = document.getElementById('content');

const header = document.createElement('header');
const mainHeader = document.createElement('h1');
const navMenu = document.createElement('nav');
const logo = new Image();
logo.src = Logo;
// 3 parts: logo, resturant name, nav menu (tabs)

content.appendChild(header);

header.innerHTML = '<img src="{Logo}">';
header.appendChild(mainHeader);
mainHeader.innerText = "Cricket's Restaurant";
