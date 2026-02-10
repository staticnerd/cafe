/**
 * BREW HAVEN CAFÉ | Global Interaction Logic
 * * Includes:
 * 1. Global Fade-in 
 * 2. Sticky Navigation Logic
 * 3. Animate On Scroll (AOS) Initialization
 * 4. Luxury Form Handling
 * 5. Tab Navigation Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Global Entrance Animation ---
    // Works with 'opacity: 0' in style.css to prevent FOUC (Flash of Unstyled Content)
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // --- 2. Initialize AOS ---
    // Custom easing for a "slower, expensive" entrance feel
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            easing: 'ease-out-quart',
            offset: 100
        });
    }

    // --- 3. Premium Navbar Logic ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 4. Luxury Form Submission ---
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Transition to loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
            submitBtn.style.letterSpacing = '1px';

            // Simulate high-end concierge delay
            setTimeout(() => {
                // Success State
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Request Received';
                submitBtn.style.background = '#D4AF37'; // Gold
                submitBtn.style.color = '#0A0B10';      // Dark
                
                alert('Aurelian Concierge: Your booking request for Brew Haven has been received. Our team will contact you shortly to finalize the details.');
                
                // Reset form
                setTimeout(() => {
                    bookingForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }, 3000);
            }, 2000);
        });
    }

    // --- 5. Mobile Tab Highlighting ---
    // Automatically highlights the bottom nav icon based on the current page
    const currentPath = window.location.pathname;
    const navTabs = document.querySelectorAll('.tab-item');
    
    navTabs.forEach(tab => {
        const tabHref = tab.getAttribute('href');
        if (currentPath.endsWith(tabHref)) {
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        }
    });

    // --- 6. Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});