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
