const menuItems = document.querySelectorAll(`.menu li`);

menuItems.forEach(item => {
    item.addEventListener('click', function(){
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
menuToggle.addEventListener('change', function() {
  // Toggle the 'opened' class on the nav element
  nav.classList.toggle('opened');
  navIcons.classList.toggle('opened');

});
