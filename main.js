// Initialize EmailJS with your user ID
  (function () {
    emailjs.init("n_qTk6cUOM-jPofL2"); // e.g., emailjs.init("k03z1x12abcDEF");
  })();

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("tanishq_xr", "template_ryk2h0e", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset(); // Optional: reset the form
      }, (error) => {
        alert("❌ Failed to send message. Try again!");
        console.error(error);
      });
  });


const navLinks = document.querySelectorAll('.nav-links a');

  // Function to update active link
  function updateActiveLink() {
    const scrollPos = window.scrollY + 100; // offset to trigger earlier

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);


        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';

                // Random size and position
                const size = Math.random() * 4 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 8) + 's';

                particlesContainer.appendChild(particle);
            }
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.8)';
            }
        });

        // Smooth scrolling for links
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

        // Add mouse move parallax effect
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth) * 100;
            const mouseY = (e.clientY / window.innerHeight) * 100;

            const bgGlow = document.querySelector('.bg-glow');
            bgGlow.style.transform = `translate(calc(-50% + ${(mouseX - 50) * 0.1}px), calc(-50% + ${(mouseY - 50) * 0.1}px))`;
        });

        // Initialize particles
        createParticles();

        // Add button click effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS for ripple effect
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));

            // Show selected page
            document.getElementById(pageId).classList.add('active');

            // Update nav tabs
            const tabs = document.querySelectorAll('.nav-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Add smooth scrolling and parallax effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const cards = document.querySelectorAll('.floating-card');

            cards.forEach((card, index) => {
                const speed = 0.5 + (index % 3) * 0.2;
                card.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
            });
        });

        // Add click animations
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cta-button')) {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                }, 150);
            }
        });
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Animate feature cards on load
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200 + 300);
            });

            // Animate title
            const title = document.querySelector('.hero-title');
            title.style.opacity = '0';
            title.style.transform = 'translateY(30px)';
            title.style.transition = 'all 0.8s ease';

            setTimeout(() => {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 100);
        });

        // Add click interactions
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'translateY(-2px) scale(1.02)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-2px) scale(1)';
                }, 150);
            });
        });

        // CTA button interaction
        document.querySelector('.cta-button').addEventListener('click', () => {
            const button = event.target;
            button.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
        });

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            const success = document.getElementById('successMessage');
            const error = document.getElementById('errorMessage');
            const btn = document.querySelector('.custom-btn');
            const originalHTML = btn.innerHTML;
            success.style.display = 'none';
            error.style.display = 'none';

            btn.innerHTML = `<svg class="custom-btn-icon" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.3"></circle>
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>Sending...`;
            btn.disabled = true;

            const style = document.createElement('style');
            style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
            document.head.appendChild(style);

            setTimeout(() => {
                if (Math.random() > 0.2) {
                    success.style.display = 'block';
                    document.getElementById('contactForm').reset();
                } else {
                    error.style.display = 'block';
                }

                btn.innerHTML = originalHTML;
                btn.disabled = false;
                document.head.removeChild(style);
            }, 2000);
        });

        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // Show button on scroll
        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // Smooth scroll to top
        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Animate cards on scroll
        function animateOnScroll() {
            const cards = document.querySelectorAll('.service-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = (index * 0.1) + 's';
                        entry.target.style.animationName = 'slideInUp';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => observer.observe(card));
        }

        // Add hover effects to cards
        function addCardEffects() {
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1) rotateX(0)';
                });
            });
        }

        // Parallax effect for background
        function addParallaxEffect() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.bg-animation');
                const speed = scrolled * 0.5;
                parallax.style.transform = `translate3d(0, ${speed}px, 0)`;
            });
        }

       // Custom Cursor with Trail
        const cursor = document.querySelector('.cursor');
        const trails = [];
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
            
            // Create trail
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = mouseX - 3 + 'px';
            trail.style.top = mouseY - 3 + 'px';
            document.body.appendChild(trail);
            
            trails.push(trail);
            
            setTimeout(() => {
                trail.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(trail)) {
                        document.body.removeChild(trail);
                    }
                }, 300);
            }, 100);
            
            if (trails.length > 20) {
                const oldTrail = trails.shift();
                if (document.body.contains(oldTrail)) {
                    document.body.removeChild(oldTrail);
                }
            }
        });

        // Initialize all effects
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            animateOnScroll();
            addCardEffects();
            addParallaxEffect();
            addCursorTrail();
        });
         // Particle Explosion on Click
        function createExplosion(x, y) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const angle = (Math.PI * 2 * i) / 20;
                const velocity = Math.random() * 100 + 50;
                
                document.body.appendChild(particle);
                
                const animation = particle.animate([
                    {
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 1
                    },
                    {
                        transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                        opacity: 0
                    }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => {
                    document.body.removeChild(particle);
                };
            }
        }

        document.addEventListener('click', (e) => {
            createExplosion(e.clientX, e.clientY);
        });

          // Add click effects to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(0, 245, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = (e.clientX - card.offsetLeft) + 'px';
                ripple.style.top = (e.clientY - card.offsetTop) + 'px';
                
                card.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize particles
        createParticles();

        // Add mouse movement parallax effect
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index + 1) * 0.5;
                card.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
            });
        });