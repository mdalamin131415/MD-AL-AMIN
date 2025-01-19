let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Increment the slide index
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

function plusSlides(n) {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Update the slide index based on arrow click
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Show the selected slide
    slides[slideIndex - 1].style.display = "block";
}

//projects section button 

document.getElementById("show-more").addEventListener("click", function() {
    var hiddenImages = document.querySelectorAll(".hidden");
    hiddenImages.forEach(function(image) {
        if (image.style.display === "block") {
            image.style.display = "none"; // Hide images if already shown
            document.getElementById("show-more").textContent = "Show More"; // Update button text
        } else {
            image.style.display = "block"; // Show hidden images
            document.getElementById("show-more").textContent = "Show Less"; // Update button text
        }
    });
});

//counter section


// Function to start the counting animation
function startCounting(counter, duration) {
    const target = +counter.getAttribute('data-target');
    const increment = target / (duration / 10); // Adjust increment based on the duration

    let currentValue = 0;

    const updateCounter = () => {
        currentValue += increment;

        if (currentValue < target) {
            counter.innerText = Math.ceil(currentValue);
            setTimeout(updateCounter, 10); // Update every 10 milliseconds
        } else {
            counter.innerText = target; // Ensure it reaches the exact target value
        }
    };

    updateCounter();
}

// Scroll event listener to trigger counting when the section is in view
window.addEventListener('scroll', () => {
    const counterSection = document.getElementById('counter-section');
    const sectionPosition = counterSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            // Adjust duration based on how slow or fast you want the counting
            startCounting(counter, 1000); // 3000ms for 3 seconds
        });
    }
});

// testimonials section

let currentIndex = 0;
let autoSwitch = true;
let testimonials = document.querySelectorAll('.testimonial-item');
let totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
}

document.getElementById('next-btn').addEventListener('click', nextTestimonial);
document.getElementById('prev-btn').addEventListener('click', prevTestimonial);

let loopToggle = document.getElementById('loop-toggle');
loopToggle.addEventListener('click', () => {
  autoSwitch = !autoSwitch;
  loopToggle.innerText = autoSwitch ? 'Loop On' : 'Loop Off';
});

function autoSwitchTestimonials() {
  if (autoSwitch) {
    nextTestimonial();
  }
}

setInterval(autoSwitchTestimonials, 10000);  // Switch every 5 seconds











