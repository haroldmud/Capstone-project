const hamburger = document.getElementById('link_menu');
const navBar = document.getElementById('nav_bar');
const list = document.getElementById('nav_ul');

function HideNav() {
  console.log('hiden');
  navBar.style.display = 'none';
  document.getElementById('menu-icon').style.display = 'flex';
  document.getElementById('menu-icon2').style.display = 'none';
}
function showNav() {
  console.log('shown');
  navBar.style.display = 'flex';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-icon2').style.display = 'flex';
}