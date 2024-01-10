const nav = document.querySelector('nav');

const navScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 50) {
        nav.style.boxShadow = '0 -6px 10px 5px rgba(0,0,0,0.5)';
        nav.style.transition = "0.3s";
    } else {
        nav.style.background = 'transparent';
    }
};

document.addEventListener('scroll', navScroll);

const menu = document.querySelector('.header__navigation-menu');
const burgerMenu = document.querySelector('.header__burger');

burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__menu-active');
})


const links = document.querySelectorAll(".header__menu-link");
const sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while(--len && window.scrollY + 100 < sections[len].offsetTop){}
    links.forEach(ltx => ltx.classList.remove("header__link-active"));
    links[len].classList.add("header__link-active");
    menu.classList.remove('header__menu-active');
}

activeMenu()
window.addEventListener('scroll', activeMenu);


// function sendToWhatsapp() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;


//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//         alert('Please fill in all the required fields.');
//         return;
//     }

//     let number = "+9960777503500";

//     let url = "https://wa.me/" + number +"?text="
//     + "Name :" + name + "%0a"
//     + "Email :" + email + "%0a"
//     + "Message :" + message + "%0a%0a";

//     window.open(url, '_blank').focus();
// }

// function sendToWhatsapp() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let message = document.getElementById('message').value;

//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//         alert('Please fill in all the required fields.');
//         return;
//     }

//     let number = "+9960777503500";

//     let url = "whatsapp://send?phone=" + encodeURIComponent(number)
//     + "&text=Name: " + encodeURIComponent(name) + "%0a"
//     + "Email: " + encodeURIComponent(email) + "%0a"
//     + "Message: " + encodeURIComponent(message);

//     window.location.href = url;
// }

function sendToWhatsapp() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all the required fields.');
        return;
    }

    let number = "+9960777503500";

    // Try to open the WhatsApp app using the custom scheme
    let whatsappUrl = "whatsapp://send?phone=" + encodeURIComponent(number)
        + "&text=Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Message: " + encodeURIComponent(message);

    // Try to open the WhatsApp app, fallback to web link if not installed
    window.location.href = whatsappUrl;

    // Fallback for devices where the WhatsApp app might not be installed
    setTimeout(function () {
        let webUrl = "https://wa.me/" + number + "?text="
            + "Name :" + encodeURIComponent(name) + "%0a"
            + "Email :" + encodeURIComponent(email) + "%0a"
            + "Message :" + encodeURIComponent(message) + "%0a%0a";

        window.open(webUrl, '_blank').focus();
    },0);
}

