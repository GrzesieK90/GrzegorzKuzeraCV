/*==================== SHOW MENU MOBILE ====================*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
      
    // Validate that variables exist
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
  }

showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(element => element.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset   //the numbers of pixels when scrolling down
  sections.forEach(current => {
      const sectionHeight = current.offsetHeight  //the height of the element, including vertical padding & borders
      const sectionTop = current.offsetTop - 50;  // the pixels from up till the first 
      sectionId = current.getAttribute('id')  //get the value of the atribute, in our case the id

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')        // inca nu stiu de ce asa
      } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 

const scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >=200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle('dark-theme')
    themeButton.classList.toggle('bx-sun')
    themeButton.classList.toggle('bx-moon')
})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
const scaleCV = () => {
  document.body.classList.add('scale-cv');
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 
const removeScale = () => {
  document.body.classList.remove('scale-cv');
}

/*==================== GENERATE PDF ====================*/ 
// PDF generated area

let areaCv = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');

// Html2pdf options
let opt = {
  margin:       0,
  filename:     'GrzegorzKuzeraCV.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};

// Function to call areaCv and Html2Pdf options 
const generateResume = () => {
  html2pdf(areaCv, opt)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCV();

  // 2. The PDF is generated
  generateResume();

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 4000);
})

