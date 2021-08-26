document.addEventListener("DOMContentLoaded", () => {
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
   * Define Global Variables
   *
   */

  /**
   * End Global Variables
   * Start Helper Functions
   *
   */
  /*const checkView = (el) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  };*/

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * End Helper Functions
   * Begin Main Functions
   *
   */

  // build the nav

  // Add class 'active' to section when near top of viewport

  // Scroll to anchor ID using scrollTO event

  /**
   * End Main Functions
   * Begin Events
   *
   */

  // Build menu

  // Scroll to section on link click

  // Set sections as active

  const sections = document.querySelectorAll("section");

  const numOfSections = sections.length;

  for (let i = 1; i <= numOfSections; i++) {
    let a = document.createElement("a");
    let Li = document.createElement("LI");
    a.textContent = "Section " + i;
    a.setAttribute("href", "index.html#section" + i);
    Li.appendChild(a);
    a.classList.add("menu__link");
    document.getElementById("navbar__list").appendChild(Li);
  }

  document.addEventListener("scroll", () => {
    const navbarElements = document.querySelectorAll("li");
    sections.forEach((el, idx) => {
      if (isInViewport(el)) {
        el.classList.add("your-active-class");
        navbarElements[idx].classList.add("in-view");
      } else {
        el.classList.remove("your-active-class");
        navbarElements[idx].classList.remove("in-view");
      }
    });
  });

  //end of the global function
});
