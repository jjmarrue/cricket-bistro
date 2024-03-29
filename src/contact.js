import findMe from './assets/images/location-dot-solid.svg';
import emailMe from './assets/images/envelope-solid.svg';
import phoneMe from './assets/images/phone-solid.svg';

export function contactPage() {
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact');
  const contact = document.createElement('div');
  const hours = document.createElement('div');
  const info = document.createElement('ul');
  const address = document.createElement('li');
  const phone = document.createElement('li');
  const email = document.createElement('li');

  address.innerHTML = '<span><img src='+findMe+'></span> -14.466945886285274, 26.168460103226597';
  phone.innerHTML = '<span><img src='+emailMe+'></span> +260766753059';
  email.innerHTML = '<span><img src='+phoneMe+'></span> contact@mrcricket.zm';
  contact.innerHTML = '<h2>Contact Us</h2>';
  hours.innerHTML = `
  <h2>Hours of Operation</h2>
  <p><span>Monday - Friday</span></p>
  <ul>
    <li>Lunch: 12:00 PM — 2:00 PM</li>
  <li>Dinner: 5:00 PM — 10:00 PM</li>
  </ul>
  `;

  info.appendChild(address);
  info.appendChild(phone);
  info.appendChild(email);
  contact.appendChild(info);
  contactContent.appendChild(hours);
  contactContent.appendChild(contact);

  return contactContent;
}
