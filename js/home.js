const hamburger = document.getElementsByClassName('hamburger')[0];
const navList = document.getElementsByClassName('header_nav')[0];
const pro=document.getElementsByClassName('li_product')[0];
const lang=document.getElementsByClassName('language')[0];
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active'); // Toggle 'active' class
  pro.classList.toggle('active');
});
pro.addEventListener('click',() => {
  pro.classList.toggle('active');
});
// lang.addEventListener('click',() => {
//   lang.classList.toggle('active');
// });

const container = document.querySelector('.iris_animation_bg');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY-1200; 
  container.style.transform = `translateX(-${scrollPosition*0.5}px)`
});
window.addEventListener('scroll', function() {
  const background = document.querySelector('.waves');  // Selects the element with class 'waves'
  const scrollPosition = window.pageYOffset;  // Gets the vertical scroll position of the window
  
  background.style.transform = `translateY(-${scrollPosition * 0.5}px)`;  // Moves the element vertically
});
window.addEventListener('scroll', function() {
  const background = document.querySelector('.wavefly');  // Selects the element with class 'waves'
  const scrollPosition = window.pageYOffset; // Get the vertical scroll position
      background.style.transform = `translate(-50%, -50%) rotate(-${scrollPosition * 0.2}deg)`;
 // Moves the element vertically
});
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//       {pageLanguage: 'en'},
//       'google_translate_element'
//   );
// } 

// const languageImg = document.querySelector('.language_img');
// const googleTranslate = document.getElementById('google_translate_element');

// languageImg.addEventListener('click', () => {
//     // Toggle visibility using display style
//     if (googleTranslate.style.display === 'none' || googleTranslate.style.display === '') {
//         googleTranslate.style.display = 'block';
//     } else {
//         googleTranslate.style.display = 'none';
//     }
// });

// const img = document.querySelector('.language_img');
//     const checkbox = document.getElementById('toggle-checkbox');

//     // Toggle the checkbox when the image is clicked
//     img.addEventListener('click', () => {
//         checkbox.checked = !checkbox.checked;
//     });