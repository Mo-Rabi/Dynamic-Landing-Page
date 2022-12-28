/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sectionsGrabber = document.querySelectorAll("section"); // Gives back NodeList that we can iterate over just fine too and no need for array.
const sectionsArray = Array.from(sectionsGrabber);
const navbar = document.getElementById('navbar__list');
const docFrag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createListElements () {
  for ( const sectionArrayItem of sectionsArray) {
    // Section Link from ID
    sectionLink = sectionArrayItem.getAttribute("id") // = sectionArrayItem.id
    // Section Name from data-nav
    sectionName = sectionArrayItem.getAttribute("data-nav") //sectionArrayItem.dataset.nav
    // Create new list item
    newListItem = document.createElement('li')
    newListItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`
    newListItem.classList.add('menu__link')  // newListItem.classList = 'menu__link' || newListItem.addAttribute('class' , 'menu_lnkk')
    newListItem.addEventListener ('click', (evt) => {
      evt.preventDefault();
      sectionArrayItem.scrollIntoView ( {
        behavior:'smooth', block: 'center'
      }
      )
    }
    )
    // append new list item to the document fragment for optimization
    docFrag.appendChild(newListItem);
  }
  // append docFrag  to navbar 
  navbar.appendChild(docFrag);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener('load', createListElements);

//createListElements();
window.addEventListener('scroll', () => {
  //check if the section is in viewport
  for (const section of sectionsArray) {
    const sectionTop = section.getBoundingClientRect().top;
    const equivalentLink = document.querySelector(`a[href="#${section.id}"]`) 
    if (sectionTop > 0 && sectionTop < 250) {
      //add your-active-class class
      section.classList.add('your-active-class')
      //add active class 
      equivalentLink.classList.add('active')
    } else {
      //remove your-active-class class
      section.classList.remove('your-active-class')
      //remove active class
      equivalentLink.classList.remove('active')
    }
  }
});
