
// Slider Section

document.addEventListener('DOMContentLoaded', function () {
    var carousel = new bootstrap.Carousel(document.getElementById('imageSlider'), {
        interval: false
    });
    setInterval(function () {
        carousel.next();
    },9000 );
});


// NAVBAR SECTION FIXED TOP

var navbar = document.querySelector('.navbar');
var navbarHeight = navbar.offsetHeight;
function checkNavbarScroll() {
    if (window.scrollY >= navbarHeight) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
}
checkNavbarScroll();
window.addEventListener('scroll', checkNavbarScroll);


// FOR ACTIVE NAVBAR PAGE

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          navLinks.forEach(function (otherLink) {
              otherLink.parentNode.classList.remove('active');
          });
          link.parentNode.classList.add('active');
      });
  });
  document.querySelector('.nav-item:first-child').classList.add('active');
});


// CATEGORY SECTION SCROLLING

document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.getElementById("scroll-images");
    const leftButton = document.getElementById("leftbtn");
    const rightButton = document.getElementById("rightbtn");
    const imageWidth = 185; 
    let currentPosition = 0;

    leftButton.addEventListener("click", function () {
      currentPosition -= imageWidth;
      if (currentPosition < 0) {
        currentPosition = 0;
      }
      scrollImages.style.transform = `translateX(-${currentPosition}px)`;
    });

    rightButton.addEventListener("click", function () {
      currentPosition += imageWidth;
      if (currentPosition > scrollImages.scrollWidth - scrollImages.clientWidth) {
        currentPosition = scrollImages.scrollWidth - scrollImages.clientWidth;
      }
      scrollImages.style.transform = `translateX(-${currentPosition}px)`;
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("cardsWrapper");
    const cards = document.querySelectorAll(".card");
    const cardWidth = cards[0].offsetWidth + 20; // Width of a card including margin
  
    document.getElementById("nextBtn").addEventListener("click", function () {
      wrapper.style.transition = "transform 0.3s ease-in-out";
      wrapper.style.transform = `translateX(-${cardWidth}px)`;
  
      // After the transition ends, reset the transform
      wrapper.addEventListener(
        "transitionend",
        function resetTransform() {
          wrapper.style.transition = "none";
          wrapper.style.transform = "translateX(0)";
          // Trigger reflow
          void wrapper.offsetWidth;
          wrapper.style.transition = "";
  
          // Move the first card to the end to create a loop
          wrapper.appendChild(wrapper.firstElementChild);
  
          // Remove the event listener to avoid multiple bindings
          wrapper.removeEventListener("transitionend", resetTransform);
        },
        { once: true }
      );
    });
  
    document.getElementById("prevBtn").addEventListener("click", function () {
      // Move the last card to the beginning to create a loop
      wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild);
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(-${cardWidth}px)`;
      // Trigger reflow
      void wrapper.offsetWidth;
      wrapper.style.transition = "";
      wrapper.style.transform = "translateX(0)";
    });
  });
  


