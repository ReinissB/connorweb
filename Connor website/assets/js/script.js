
// Active state for navigation links

const activePage = window.location.pathname; // Gets the active pages path name
const navLinks = document.querySelectorAll('a'). // Selects the link
forEach(link => { // for each link execute the next lines
  if(link.href.includes(`${activePage}`)){ // if link includes active pages path name
    link.classList.add('active'); // Gives the current pages link an 'active' class
  }
})

// Scroll down function for header scroll-down button

function scrollDown() { // declaring the function
    window.scrollTo({  // scrollto method
        top: window.innerHeight*1.05, // scrolls down 1.05x of the view height
        behavior: 'smooth' // Adds smooth scrolling animation
      });
}



// Back to top button

/***************************************************************************************
*    Title: <How TO - Scroll Back To Top Button>
*    Author: <W3Schools>
*    Date: <Unknown>
*    Availability: <https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top>
*
***************************************************************************************/

mybutton = document.getElementById("btnTop"); // Declares the button from the HTML document

window.onscroll = function() {scrollFunction()};

function scrollFunction() { // declaring the function
  if (document.documentElement.scrollTop > 100) { // if the scroll down exceeds 100pixels, execute next line
    mybutton.style.display = "block"; // the button appears 
  } else { // otherwise
    mybutton.style.display = "none"; // hide the button
  }
}

function toTop() { // Declares the toTop function
  document.documentElement.scrollTop = 0; // scrolls to 0pixels from the top of window
}


// Filtering event cards

/***************************************************************************************
*    Title: <Simple Vanilla JS Filtering>
*    Author: <Skandalis Vlassis>
*    Date: <Unknown>
*    Code version: <V1>
*    Availability: <https://codepen.io/vskand/pen/MWKKKYK>
*
***************************************************************************************/

const filters = document.querySelectorAll('.filter'); // Delcares the constant

filters.forEach(filter => {  // For each element that is inside the .filter div do this -->

  filter.addEventListener('click', function() { // add the ability to click the filter

    let selectedFilter = filter.getAttribute('data-filter'); // declares the selected filter
    let itemsToHide = document.querySelectorAll(`.upcoming-events-cards .event-card:not([data-filter='${selectedFilter}'])`); // declares the filter that is NOT selected
    let itemsToShow = document.querySelectorAll(`.upcoming-events-cards [data-filter='${selectedFilter}']`); // declares the filter that has been selected

    if (selectedFilter == 'all') { // if the selected filter is 'all'
      itemsToHide = []; // hide nothing
      itemsToShow = document.querySelectorAll('.upcoming-events-cards [data-filter]'); // show all, as the selected filter is all
    }

    itemsToHide.forEach(el => { // following lines are true for each of the element of NOT selected filter
      el.classList.add('hide'); // add class of HIDE
      el.classList.remove('show'); // remove class of SHOW
    });

    itemsToShow.forEach(el => { // following lines are true for each of the element of selected filter
      el.classList.remove('hide'); // remove class hide
      el.classList.add('show'); // add class show
    });

  });
});

