export function contactPage() {
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact');
  const contact = document.createElement('div');
  const hours = document.createElement('div');
  const info = document.createElement('ul');
  const address = document.createElement('li');
  const phone = document.createElement('li');
  const email = document.createElement('li');

  address.innerText = '-14.466945886285274, 26.168460103226597';
  phone.innerText = '+260766753059';
  email.innerText = 'contact@mrcricket.zm';
  contact.innerHTML = '<h2>Contact Us</h2>';
  hours.innerHTML = `
  <h2>Hours of Operation</h2>
  <p>Monday - Friday</p>
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
