$(document).ready(function () {
  $('#loading .spinner').fadeOut(1000, () => {
    AOS.init();
    $('#loading').fadeOut(1000, () => {

      $('body').css('overflow-y', 'auto')

    })
  });
});






let nav = document.getElementById('open-menu')
let exit = document.getElementById('close-menu')
let menu = document.querySelector('.nav-menu')

let all_nav = document.querySelectorAll(".mobile-navbar .nav-link") 

for (let i = 0; i < all_nav.length; i++) {
 
  all_nav[i].addEventListener("click", function () {
    menu.style.right = '-100%'
  });
  
}

nav.addEventListener("click", function () {
  menu.style.right = '0'
});

exit.addEventListener("click", function () {
  menu.style.right = '-100%'
});






let openSideMenu = document.querySelector('.setting')
let closeSideMenu = document.querySelector('.close-side-menu')
let sideMenu = document.querySelector('.side-menu')

openSideMenu.addEventListener("click", function () {
  sideMenu.style.left = '0'
});

closeSideMenu.addEventListener("click", function () {
  sideMenu.style.left = '-100%'
});




var card = document.querySelectorAll(".flip-card")
var flip = document.querySelectorAll(".flip-card-inner")


for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    if (flip[i].classList.contains("flip")) {
      flip[i].classList.remove("flip")
      flip[i].classList.add("flip-back")
    }
    else {
      flip[i].classList.remove("flip-back")
      flip[i].classList.add("flip")
    }
  })

}



var dark = document.getElementById("dark")
var light = document.getElementById("light")


dark.addEventListener("click", function () {

  document.body.classList.add("darkmode")
  document.getElementById("dark").style.border = "var(--main-color) solid 4px"
  document.getElementById("light").style.border = "#fff solid 1px"
  localStorage.setItem("mode", "dark")


})




light.addEventListener("click", function () {

  document.body.classList.remove("darkmode")
  document.getElementById("light").style.border = "var(--main-color) solid 4px"
  document.getElementById("dark").style.border = "#fff solid 1px"

  localStorage.setItem("mode", "light")


})


var pink = document.querySelector(".colors .pink")
var blue = document.querySelector(".colors .blue")
var purple = document.querySelector(".colors .purple")
var lightBlue = document.querySelector(".colors .lightBlue")
var green = document.querySelector(".colors .green")
var red = document.querySelector(".colors .red")

function doPink() {
  document.querySelector('.colors .pink i').style.opacity = "100% "
  document.querySelector('.colors .green i').style.opacity = "0% "
  document.querySelector('.colors .blue i').style.opacity = "0% "
  document.querySelector('.colors .purple i').style.opacity = "0% "
  document.querySelector('.colors .lightBlue i').style.opacity = "0% "
  document.querySelector('.colors .red i').style.opacity = "0% "


  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.remove("purple-theme")
  document.body.classList.add("pink-theme")

  localStorage.setItem("color", "pink")

}



pink.addEventListener("click", function () {

  doPink()


  // console.log(localStorage.getItem("color"));

})

function doBlue() {
  document.querySelector('.colors .pink i').style.opacity = "0% "
  document.querySelector('.colors .green i').style.opacity = "0% "
  document.querySelector('.colors .blue i').style.opacity = "100% "
  document.querySelector('.colors .purple i').style.opacity = "0% "
  document.querySelector('.colors .lightBlue i').style.opacity = "0% "
  document.querySelector('.colors .red i').style.opacity = "0% "


  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("blue-theme")

  localStorage.setItem("color", "blue")
}

blue.addEventListener("click", function () {

  doBlue()


  // console.log(localStorage.getItem("color"));

})

function doPurple() {
  document.querySelector('.colors .pink i').style.opacity = "0% "
  document.querySelector('.colors .green i').style.opacity = "0% "
  document.querySelector('.colors .blue i').style.opacity = "0% "
  document.querySelector('.colors .purple i').style.opacity = "100% "
  document.querySelector('.colors .lightBlue i').style.opacity = "0% "
  document.querySelector('.colors .red i').style.opacity = "0% "

  document.body.classList.remove("pink-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.remove("lightBlue-theme")
  document.body.classList.add("purple-theme")

  localStorage.setItem("color", "purple")
}

purple.addEventListener("click", function () {
  doPurple()
  // console.log(localStorage.getItem("color"));
})

function doLightBlue() {
  document.querySelector('.colors .pink i').style.opacity = "0% "
  document.querySelector('.colors .green i').style.opacity = "0% "
  document.querySelector('.colors .blue i').style.opacity = "0% "
  document.querySelector('.colors .purple i').style.opacity = "0% "
  document.querySelector('.colors .lightBlue i').style.opacity = "100% "
  document.querySelector('.colors .red i').style.opacity = "0% "

  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("lightBlue-theme")

  localStorage.setItem("color", "lightBlue")
}
lightBlue.addEventListener("click", function () {
  doLightBlue()
  // console.log(localStorage.getItem("color"));

})

function doGreen() {
  document.querySelector('.colors .pink i').style.opacity = "0% "
  document.querySelector('.colors .green i').style.opacity = "100% "
  document.querySelector('.colors .blue i').style.opacity = "0% "
  document.querySelector('.colors .purple i').style.opacity = "0% "
  document.querySelector('.colors .lightBlue i').style.opacity = "0% "
  document.querySelector('.colors .red i').style.opacity = "0% "

  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("red-theme")

  document.body.classList.add("green-theme")

  localStorage.setItem("color", "green")
}


green.addEventListener("click", function () {

  doGreen()
  // console.log(localStorage.getItem("color"));
})

function doRed() {
  document.querySelector('.colors .pink i').style.opacity = "0% "
  document.querySelector('.colors .green i').style.opacity = "0% "
  document.querySelector('.colors .blue i').style.opacity = "0% "
  document.querySelector('.colors .purple i').style.opacity = "0% "
  document.querySelector('.colors .lightBlue i').style.opacity = "0% "
  document.querySelector('.colors .red i').style.opacity = "100% "

  document.body.classList.remove("pink-theme")
  document.body.classList.remove("purple-theme")
  document.body.classList.remove("blue-theme")
  document.body.classList.remove("lightBlue-theme")
  document.body.classList.remove("green-theme")
  document.body.classList.add("red-theme")


  localStorage.setItem("color", "red")
}



red.addEventListener("click", function () {
  doRed()
  // console.log(localStorage.getItem("color"));
})


// console.log(localStorage.getItem("color"));


if (localStorage.getItem("color") == "red") {
  doRed()
}
else if (localStorage.getItem("color") == "green") {
  doGreen()
}
else if (localStorage.getItem("color") == "purple") {
  doPurple()
}
else if (localStorage.getItem("color") == "blue") {
  doBlue()
}
else if (localStorage.getItem("color") == "lightBlue") {
  doLightBlue()
}
else if (localStorage.getItem("color") == "pink") {
  doPink()
}




if (localStorage.getItem("mode") == "dark") {
  document.body.classList.add("darkmode")
  document.getElementById("dark").style.border = "var(--main-color) solid 4px"
  document.getElementById("light").style.border = "#fff solid 1px"
  localStorage.setItem("mode", "dark")
}
else {
  document.body.classList.remove("darkmode")
  document.getElementById("light").style.border = "var(--main-color) solid 4px"
  document.getElementById("dark").style.border = "#fff solid 1px"
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  freeMode: true, // Enable Freemode
  slidesPerView: 11, // Change this number based on your needs
  spaceBetween: 10, // Space between slides
  autoplay: {
    delay: 0, // Delay between transitions (in milliseconds)
    disableOnInteraction: false, // Stop autoplay on interaction
  },
  speed: 2500,
  simulateTouch: false, // Disable dragging interactions
  allowTouchMove: false, // Disable touch interactions
  keyboard: {
    enabled: false, // Disable keyboard navigation
  },
  mousewheel: {
    enabled: false, // Disable mousewheel control
  },
  breakpoints: {
    0: {
      slidesPerView: 3, // 1 slide per view on small screens
      spaceBetween: 10, // Space between slides
    },
    400: {
      slidesPerView: 4, // 1 slide per view on small screens
      spaceBetween: 10, // Space between slides
    },
    640: {
      slidesPerView: 5, // 1 slide per view on small screens
      spaceBetween: 10, // Space between slides
    },
    768: {
      slidesPerView: 7, // 2 slides per view on medium screens
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 8, // 3 slides per view on large screens
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 10, // 3 slides per view on large screens
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 11, // 3 slides per view on large screens
      spaceBetween: 10,
    },
  },




});






var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 30;
jQuery(window).on('scroll', function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});
jQuery('.progress-wrap').on('click', function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, duration);
  return false;
})








function validateForm(name, email, message) {
  // Regex for name (allows letters, spaces, hyphens, and apostrophes)
  const nameRegex = /\p{L}{2,}/gu;

  // Regex for email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex for message (1 to 500 characters)
  const messageRegex = /^[\s\S]{1,500}$/;

  let isValid = true;
  let errors = [];

  // Validate name
  if (!nameRegex.test(name)) {
    isValid = false;
    errors.push("Invalid name format.");
  }

  // Validate email
  if (!emailRegex.test(email)) {
    isValid = false;
    errors.push("Invalid email format.");
  }

  // Validate message
  if (!messageRegex.test(message)) {
    isValid = false;
    errors.push("Message must be between 1 and 500 characters.");
  }

  return { isValid, errors };
}



var alert = document.getElementById("alert")
var succuss = document.getElementById("succuss")

var form_name = document.getElementById("name")
var form_email = document.getElementById("email")
var form_message = document.getElementById("message")


function sendMail() {

  var params = {
    from_name: form_name.value,
    email_id: form_email.value,
    message: form_message.value
  }

  const validation = validateForm(params.from_name, params.email_id, params.message);
  if (validation.isValid) {
    console.log("Validation passed!");
    emailjs.send("service_u1kcaak", "template_lkyhon7", params);

    form_name.value = '';
    form_email.value = '';
    form_message.value = '';

    alert.classList.replace("d-block" , "d-none");
    succuss.classList.replace("d-none" , "d-block");

    setTimeout(() => {
      succuss.classList.replace("d-block" , "d-none");

    }, 2000);

  } else {
    alert.classList.replace("d-none" , "d-block")
    alert.innerText = validation.errors.shift('.') ; 
   
    // console.log("Validation errors:", validation.errors);
  }




}






// Detecting scroll events to add/remove the "active" class on NavLinks

// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to add "active" class based on scroll position
function setActiveLinkOnScroll() {
  let currentSection = '';
  
  // Loop through each section to see which one is currently in view
  document.querySelectorAll('.section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

    // Check if the section is in view
    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  // Remove "active" class from all links and add it to the one corresponding to the visible section
  navLinks.forEach((link) => {
    if (link.getAttribute('href')?.includes(currentSection)) {
      link.classList.add('activee');
    } else {
      link.classList.remove('activee');
    }
  });
}

// Attach the function to the scroll event
window.addEventListener('scroll', setActiveLinkOnScroll);

// Initial call to set active link based on the initial scroll position
setActiveLinkOnScroll();







    document.getElementById('down-arrow').addEventListener('click', function() {
      document.getElementById('down-arrow').scrollIntoView({ behavior: 'smooth' });

    })








// JavaScript to handle the scroll with an offset

const navbarLinks = document.querySelectorAll('.nav-link'); // Changed variable name
const scrollOffset = 80; // Changed variable name to scrollOffset

navbarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Get the target section ID from the href attribute
    const targetSectionId = this.getAttribute('href').substring(1); // Changed variable name to targetSectionId
    const targetSectionElement = document.getElementById(targetSectionId); // Changed to targetSectionElement

    // Calculate the position to scroll to, offset by the desired value
    const scrollToPosition = targetSectionElement.offsetTop - scrollOffset; // Changed variable name to scrollToPosition

    // Smooth scroll to the calculated position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'instant'
    });

    // Prevent default anchor behavior (no jump, smooth scroll instead)
    event.preventDefault();

    // Optional: Add 'active' class to the clicked link and remove from others
    navbarLinks.forEach(link => link.classList.remove('activee'));
    this.classList.add('activee');
  });
});
