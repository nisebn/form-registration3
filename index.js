var menuBtn = document.querySelector('.nav-menu .menu-btn');
var menuList = document.querySelector('.nav-menu .list-items');
var menuListItems = document.querySelectorAll('.list-items a');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});
for (var i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener('click', menuItemsClicked);



}
function menuItemsClicked() {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');

}