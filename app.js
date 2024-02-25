document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the menu toggle checkbox
    const menuToggle = document.getElementById('menu-toggle');
    
    // Get a reference to the nav element
    const nav = document.querySelector('nav');

    // Trigger the change event on the menu toggle checkbox
    menuToggle.checked = true;
    
    // Add the 'opened' class to the nav element
    nav.classList.add('opened');
});

const menuItems = document.querySelectorAll(`.menu li`);

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
            menuItem.classList.add('inactive');
        });
        item.classList.add('active');
        item.classList.remove('inactive');
    });
});
// Get a reference to the menu toggle checkbox
const menuToggle = document.getElementById('menu-toggle');

// Get a reference to the nav element
const nav = document.querySelector('nav');
const navIcons = document.querySelectorAll(`nav a`);
// Add an event listener to the menu toggle checkbox
menuToggle.addEventListener('change', function () {
    // Toggle the 'opened' class on the nav element
    nav.classList.toggle('opened');
    navIcons.classList.toggle('opened');

});

// Crousel button functionallity
// All the images' addresses will be stored in an array.
// onClick of buttons will change the img src in the div.
// Just the array index will be passed and the src will 
// change automatically

let imgAddress = [`https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81UWgnVKDBL._SL1500_.jpg`,
    `https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81x9vxrPFwS._SL1500_.jpg`,
    `https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Dxj-4II1L._SL1200_.jpg`];
let productImg = document.querySelector(`.grid div img`);
let rBtn = document.getElementById(`right`);
let lBtn = document.getElementById(`left`);

// By default the img src will be at index 0 of imgAddress
let currIndex = 0;
productImg.src = imgAddress[currIndex];
rBtn.addEventListener('click', () => {
    console.log("Right Btn was clicked");
    currIndex++;
    if (currIndex >= imgAddress.length) {
        currIndex = 0; // Reset index to loop back to the beginning
    }
    productImg.src = imgAddress[currIndex];

});
lBtn.addEventListener('click', () => {
    console.log("Left Btn was clicked");
    currIndex--;
    if (currIndex < 0) {
        currIndex = imgAddress.length - 1; // Loop to the last image if index goes below 0
    }
    productImg.src = imgAddress[currIndex];

});
