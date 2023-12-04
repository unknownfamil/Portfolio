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

// const form = document.getElementById('commentForm');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const comment = document.getElementById('comment');

//     const data = {
//         name,
//         email,
//         comment
//     };

//     fetch('Url', {
//         method: 'POST',
//         headers:  {
//             'content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Your comment has been submitted succesfully!');
//             form.reset();
//         } else {
//             alert('There was an error submiting your comment.');
//         }
//     });
// });



