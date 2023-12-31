let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav-menu');
let burgerStick = document.querySelectorAll('.header__burger-stick');
burger.addEventListener('click', () => {
    menu.classList.add('header__menu-active');
});

let menuLinks = document.querySelectorAll('.header__menu-link');

menuLinks.forEach((el) => {
    el.addEventListener('click', () => {
        menuLinks.forEach((rp) => {
            rp.classList.remove('header__link-active');
        });
        el.classList.add('header__link-active');
        menu.classList.remove('header__menu-active');
    });
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_e8vlpjt';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Email';
      alert('Email Sent Succesfulyy Thank you!');
    }, (err) => {
      btn.textContent= 'Send Email';
      alert(JSON.stringify(err));
    });
});


