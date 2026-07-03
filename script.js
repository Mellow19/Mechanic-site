let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    // 1. Remove active class from the current slide
    slides[currentSlide].classList.remove('active');
    
    // 2. Move to the next index, looping back to 0 if at the end
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 3. Add active class to the new slide
    slides[currentSlide].classList.add('active');
}

// Change image every 4000 milliseconds (4 seconds)
setInterval(nextSlide, 4000);

// --- Contact Form Submission Handling ---
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-container form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            // 1. Prevent the default browser page reload
            e.preventDefault();

            // 2. Grab the user's input values
            const customerName = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const vehicleInfo = contactForm.querySelector('input[placeholder*="Vehicle Make"]').value;

            // 3. Construct a premium confirmation layout
            const container = document.querySelector(".contact-container");
            container.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease forward;">
                    <div style="font-size: 50px; color: #ffb703; margin-bottom: 20px;">✓</div>
                    <h3 style="font-family: 'Montserrat', sans-serif; color: #fff; font-size: 24px; margin-bottom: 15px;">
                        Enquiry Received, ${customerName}
                    </h3>
                    <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; max-width: 500px; margin: 0 auto 30px;">
                        A master technician has been assigned to review your request for the <strong>${vehicleInfo || 'specified vehicle'}</strong>. We will contact you shortly to finalize your workshop entry window.
                    </p>
                    <button onclick="window.location.reload()" style="background-color: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s;">
                        Submit Another Request
                    </button>
                </div>
            `;
        });
    }
});

// --- Mobile Menu Toggle Handler ---
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        // Toggle menu view state on click
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });

        // Automatically hide navigation view when a section link is selected
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('is-active');
                navMenu.classList.remove('is-active');
            });
        });
    }
});