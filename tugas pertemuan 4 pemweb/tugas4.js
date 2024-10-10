function revealSection(section) {
    setTimeout(() => {
      section.classList.add('visible');
    }, 300);
  }
  
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const sections = [
    { id: 'section1', title: 'Home' },
    { id: 'section2', title: 'About' },
    { id: 'section3', title: 'Contact' }
  ];
  
  sections.forEach(section => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${section.id}">${section.title}</a>`;
    ul.appendChild(li);
  });
  
  nav.appendChild(ul);
  header.appendChild(nav);
  document.body.appendChild(header);
  
  sections.forEach((section, index) => {
    const sec = document.createElement('section');
    sec.id = section.id;
  
    if (section.id === 'section1') {
      sec.innerHTML = `
        <h2>Welcome to the Home Section</h2>
        <p>Ini adalah halaman utama HilCompany.</p>
        <button id="colorButton">Click me to our life!</button>
      `;
    } else if (section.id === 'section2') {
      sec.innerHTML = `
        <h2>About Us</h2>
        <p>Tentang kami yang asik, menarik, fantastik!!!.</p>
      `;
    } else if (section.id === 'section3') {
      sec.innerHTML = `
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input type="text" id="name" placeholder="Your Name" required>
          <input type="email" id="email" placeholder="Your Email" required>
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      `;
    }
  
    document.body.appendChild(sec);
    revealSection(sec); 
  });
  
  document.getElementById('colorButton').addEventListener('click', () => {
    document.body.style.background = 
      document.body.style.background === 'linear-gradient(135deg, #ffcc70, #ff8177)' ? 
      'linear-gradient(135deg, #70ffcc, #77ff81)' : 
      'linear-gradient(135deg, #ffcc70, #ff8177)';
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! We have received your message.`);
  });
  