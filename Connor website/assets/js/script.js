
// Active state for navigation links

const activePage = window.location.pathname; // Gets the active pages path name
const navLinks = document.querySelectorAll('a'). // Selects the link
forEach(link => {
  if(link.href.includes(`${activePage}`)){ // if link includes active pages path name
    link.classList.add('active'); // Gives the current pages link an 'active' class
  }
})

// Scroll down function for header scroll-down button

function scrollDown() {
    window.scrollTo({
        top: window.innerHeight*1.05, // scrolls down 1.05x of the view height
        behavior: 'smooth' // Adds smooth scrolling animation
      });
}


// REFERENCE TO W3 SCHOOLS!!!!

// Adds the back-to-top button

mybutton = document.getElementById("btnTop"); // Selects the button from the HTML

window.onscroll = function() {scrollFunction()};

function scrollFunction() { // declaring the function
  if (document.documentElement.scrollTop > 100) { // when scrolled down 100px execute next line
    mybutton.style.display = "block"; // the button appears 
  } else {
    mybutton.style.display = "none"; // the button dissappears if the first condition is not true
  }
}

function toTop() { // Scroll to top function
  document.documentElement.scrollTop = 0;
}
