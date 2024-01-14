//Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Error occurred ensure that the ${selector} exist or is typed correctly.`);
};



// Nav style on scroll
const scrollHeader = () => {
    const navbarElement = selectElement('#header');
    if (this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    console.log('Toggle menu function called'); 
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


