document.addEventListener('DOMContentLoaded', () => {
  //function that checks if the current section's  in the viewPort
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
  };

  const sections = document.querySelectorAll('section');

  const numOfSections = sections.length;
  //loop to create list items and adding a elements to it then sets an attribute with the sections link to scroll over there by click

  for (let i = 1; i <= numOfSections; i++) {
    let navBarLink = document.createElement('a');
    let navBarListItem = document.createElement('LI');
    navBarLink.textContent = 'Section ' + i;
    navBarLink.setAttribute('href', 'index.html#section' + i);
    navBarListItem.appendChild(navBarLink);
    navBarLink.classList.add('menu__link');
    document.getElementById('navbar__list').appendChild(navBarListItem);

    //eventListener to scroll to the section in view when clicked

    navBarLink.addEventListener('click', (event) => {
      event.preventDefault();

      document
        .getElementById('section' + i)
        .scrollIntoView({ behavior: 'smooth' });
    });
  }

  //eventListener that waits for the scroll to happen, calls the function to check if section in view , adds class therefore adding style to it
  document.addEventListener('scroll', () => {
    const navbarElements = document.querySelectorAll('li');
    sections.forEach((el, idx) => {
      if (isInViewport(el)) {
        el.classList.add('your-active-class');
        navbarElements[idx].classList.add('in-view');
      } else {
        el.classList.remove('your-active-class');
        navbarElements[idx].classList.remove('in-view');
      }
    });
  });

  //end of the global function
});
