const hamburger = document.getElementsByClassName('hamburger')[0];
const navList = document.getElementsByClassName('header_nav')[0];
const pro=document.getElementsByClassName('li_product')[0];

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active'); // Toggle 'active' class
  pro.classList.toggle('active');
});
pro.addEventListener('click',() => {
  pro.classList.toggle('active');
});