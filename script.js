document.addEventListener('DOMContentLoaded', () => {

    // Helper to safely run initialization modules and prevent script crashing
    function runModule(name, fn) {
        try {
            fn();
            console.log(`[System] Module "${name}" loaded successfully.`);
        } catch (e) {
            console.error(`[Error] Module "${name}" failed to load:`, e);
        }
    }

    // Toast Notification utility container references
    const toastContainer = document.getElementById('toast-container');
    function showToast(title, message) {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast toast-success';
        
        toast.innerHTML = `
            <div class="toast-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="toast-content">
                <h5>${title}</h5>
                <p>${message}</p>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Auto remove toast after 4 seconds
        setTimeout(() => {
            toast.classList.add('removing');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);
    }

    /* ==================== SELECT ACCENT THEME FROM LOCALSTORAGE ==================== */
    runModule("Theme Restoration", () => {
        let savedTheme = null;
        try {
            savedTheme = localStorage.getItem('portfolio-accent-theme');
        } catch (e) {
            console.warn("localStorage read blocked in this browser:", e);
        }

        if (savedTheme) {
            document.body.className = 'dark-theme';
            if (savedTheme !== 'cyan-purple') {
                document.body.classList.add(savedTheme);
            }
            document.querySelectorAll('.color-dot').forEach(dot => {
                if (dot.getAttribute('data-theme') === savedTheme) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    });

    /* ==================== THEME ACCENT SWITCHER MENU ==================== */
    runModule("Theme Switcher", () => {
        const switcherToggle = document.getElementById('switcher-toggle');
        const themeMenu = document.getElementById('theme-menu');
        const colorDots = document.querySelectorAll('.color-dot');

        if (switcherToggle && themeMenu) {
            switcherToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                themeMenu.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!themeMenu.contains(e.target) && e.target !== switcherToggle) {
                    themeMenu.classList.remove('active');
                }
            });

            colorDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    colorDots.forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                    
                    const selectedTheme = dot.getAttribute('data-theme');
                    document.body.className = 'dark-theme';
                    if (selectedTheme !== 'cyan-purple') {
                        document.body.classList.add(selectedTheme);
                    }
                    
                    try {
                        localStorage.setItem('portfolio-accent-theme', selectedTheme);
                    } catch (e) {
                        console.warn("localStorage write blocked:", e);
                    }
                    
                    showToast("Đã Thay Đổi Giao Diện", `Chuyển thành công sang tông màu ${dot.getAttribute('title')}`);
                });
            });
        }
    });

    /* ==================== CUSTOM CURSOR LEAP FOLLOWER ==================== */
    runModule("Custom Cursor", () => {
        const customCursor = document.getElementById('custom-cursor');
        const cursorGlow = document.getElementById('cursor-glow');

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (customCursor && cursorGlow) {
                customCursor.style.opacity = '1';
                cursorGlow.style.opacity = '1';
            }
        });

        document.addEventListener('mouseleave', () => {
            if (customCursor && cursorGlow) {
                customCursor.style.opacity = '0';
                cursorGlow.style.opacity = '0';
            }
        });

        const coreEye = document.getElementById('core-eye');
        const corePupil = document.getElementById('core-pupil');

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;

            if (customCursor && cursorGlow) {
                customCursor.style.left = `${cursorX}px`;
                customCursor.style.top = `${cursorY}px`;
                
                cursorGlow.style.left = `${glowX}px`;
                cursorGlow.style.top = `${glowY}px`;
            }

            if (coreEye && corePupil) {
                const rect = coreEye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;

                const dx = mouseX - eyeCenterX;
                const dy = mouseY - eyeCenterY;

                const angle = Math.atan2(dy, dx);
                const rawDist = Math.sqrt(dx * dx + dy * dy);
                const moveDist = Math.min(rawDist * 0.06, 14);

                const translateX = Math.cos(angle) * moveDist;
                const translateY = Math.sin(angle) * moveDist;

                corePupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
            }

            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    });

    // Helper cursor hover binding function
    function setupCursorHovers() {
        const hoverTargets = document.querySelectorAll('.hover-target, a, button, .project-card, .contact-card, .filter-btn');
        hoverTargets.forEach(target => {
            // Remove existing listener if any to avoid duplication
            target.removeEventListener('mouseenter', addCursorClass);
            target.removeEventListener('mouseleave', removeCursorClass);
            
            target.addEventListener('mouseenter', addCursorClass);
            target.addEventListener('mouseleave', removeCursorClass);
        });
    }

    function addCursorClass() {
        document.body.classList.add('cursor-hover');
    }

    function removeCursorClass() {
        document.body.classList.remove('cursor-hover');
    }

    runModule("Cursor Hover Bindings", () => {
        setupCursorHovers();
    });

    /* ==================== TYPING TEXT ANIMATION ==================== */
    runModule("Typing Animation", () => {
        const typedTextElement = document.getElementById('typed-text');
        if (typedTextElement) {
            const words = [
                "Hierarchical Multi-Agent Systems.",
                "Advanced Agentic RAG Frameworks.",
                "Temporal Knowledge Graphs.",
                "LLM Alignment & Reinforcement (GRPO)."
            ];
            let wordIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            let typingSpeed = 100;

            function type() {
                const currentWord = words[wordIdx];
                if (isDeleting) {
                    charIdx--;
                    typingSpeed = 50;
                } else {
                    charIdx++;
                    typingSpeed = 120;
                }

                typedTextElement.textContent = currentWord.substring(0, charIdx);

                if (!isDeleting && charIdx === currentWord.length) {
                    typingSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    wordIdx = (wordIdx + 1) % words.length;
                    typingSpeed = 500;
                }

                setTimeout(type, typingSpeed);
            }
            setTimeout(type, 1000);
        }
    });

    /* ==================== MOBILE HAMBURGER MENU ==================== */
    runModule("Mobile Menu", () => {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu && navClose) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });

            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('show-menu');
                });
            });
        }
    });

    /* ==================== HEADER ACTIVE BACKGROUND & BACK-TO-TOP ==================== */
    runModule("Scroll Features", () => {
        const header = document.getElementById('header');
        const scrollTopBtn = document.getElementById('scroll-top');

        window.addEventListener('scroll', () => {
            if (header) {
                if (window.scrollY >= 50) {
                    header.classList.add('scroll-active');
                } else {
                    header.classList.remove('scroll-active');
                }
            }

            if (scrollTopBtn) {
                if (window.scrollY >= 400) {
                    scrollTopBtn.classList.add('active');
                } else {
                    scrollTopBtn.classList.remove('active');
                }
            }
        });

        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });

    /* ==================== INTERACTIVE CANVAS PARTICLES ==================== */
    runModule("Canvas Particles", () => {
        const canvas = document.getElementById('particle-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let particlesArray = [];
            let mouse = { x: null, y: null, radius: 120 };

            function resizeCanvas() {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                initParticles();
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            window.addEventListener('mousemove', (event) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = event.clientX - rect.left;
                mouse.y = event.clientY - rect.top;
            });

            window.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });

            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x;
                    this.y = y;
                    this.directionX = directionX;
                    this.directionY = directionY;
                    this.size = size;
                    this.color = color;
                }

                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }

                update() {
                    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

                    if (mouse.x !== null && mouse.y !== null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < mouse.radius) {
                            let forceDirectionX = dx / distance;
                            let forceDirectionY = dy / distance;
                            this.x -= forceDirectionX * 2;
                            this.y -= forceDirectionY * 2;
                        }
                    }

                    this.x += this.directionX;
                    this.y += this.directionY;
                    this.draw();
                }
            }

            function initParticles() {
                particlesArray = [];
                let numberOfParticles = Math.floor((canvas.width * canvas.height) / 13000);
                if (numberOfParticles > 80) numberOfParticles = 80;
                
                const rootStyles = getComputedStyle(document.documentElement);
                const accent1 = rootStyles.getPropertyValue('--accent-1').trim() || '#00f2fe';

                for (let i = 0; i < numberOfParticles; i++) {
                    let size = (Math.random() * 1.5) + 0.5;
                    let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                    let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                    let directionX = (Math.random() * 0.4) - 0.2;
                    let directionY = (Math.random() * 0.4) - 0.2;
                    let color = accent1 + '33';

                    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
                }
            }

            function connectParticles() {
                let opacityValue = 1;
                const rootStyles = getComputedStyle(document.documentElement);
                const accent1 = rootStyles.getPropertyValue('--accent-1-rgb').trim() || '0, 242, 254';

                for (let a = 0; a < particlesArray.length; a++) {
                    for (let b = a; b < particlesArray.length; b++) {
                        let dx = particlesArray[a].x - particlesArray[b].x;
                        let dy = particlesArray[a].y - particlesArray[b].y;
                        let distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 100) {
                            opacityValue = 1 - (distance / 100);
                            ctx.strokeStyle = `rgba(${accent1}, ${opacityValue * 0.15})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                }
                connectParticles();
                requestAnimationFrame(animateParticles);
            }

            initParticles();
            animateParticles();
            
            document.querySelectorAll('.color-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    setTimeout(initParticles, 100);
                });
            });
        }
    });

    /* ==================== INTERSECTION OBSERVER: SCROLL REVEAL ==================== */
    runModule("Scroll Reveal", () => {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    if (entry.target.classList.contains('about-skills')) {
                        const skillProgresses = document.querySelectorAll('.skill-progress');
                        skillProgresses.forEach(progress => {
                            const width = progress.getAttribute('data-width');
                            progress.style.width = width;
                        });
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    });

    /* ==================== ACTIVE MENU NAVIGATION LINK ON SCROLL ==================== */
    runModule("Scroll Navigation Active", () => {
        const sections = document.querySelectorAll('section[id]');
        
        function scrollActive() {
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 120;
                const sectionId = current.getAttribute('id');
                const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

                if (navLink) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLink.classList.add('active-link');
                    } else {
                        navLink.classList.remove('active-link');
                    }
                }
            });
        }
        window.addEventListener('scroll', scrollActive);
    });

    /* ==================== PORTFOLIO PROJECTS GRID FILTER ==================== */
    runModule("Projects Grid Filter", () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Set active class visually
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        // Force layout trigger for scale transition
                        void card.offsetWidth; 
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        card.style.display = 'none';
                    }
                });
                
                // Re-setup custom cursor hovers since layout reflowed
                setTimeout(setupCursorHovers, 150);
            });
        });
    });

    /* ==================== CONTACT FORM ACTION SIMULATION ==================== */
    runModule("Contact Form", () => {
        const contactForm = document.getElementById('contact-form');
        const btnSubmit = document.getElementById('btn-submit');
        const formStatus = document.getElementById('form-status');

        if (contactForm && btnSubmit) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Clear any previous status
                if (formStatus) {
                    formStatus.className = 'form-status';
                    formStatus.style.display = 'none';
                    formStatus.textContent = '';
                }

                // Add loading spinner class
                btnSubmit.classList.add('submitting');
                btnSubmit.disabled = true;

                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;

                // Simulate server network request delay (1.5 seconds)
                setTimeout(() => {
                    // Clear inputs
                    contactForm.reset();
                    
                    // Remove loading spinner
                    btnSubmit.classList.remove('submitting');
                    btnSubmit.disabled = false;

                    // Show success message below the button
                    if (formStatus) {
                        formStatus.className = 'form-status success';
                        formStatus.style.display = 'block';
                        formStatus.textContent = `Gửi tin nhắn thành công! Cảm ơn ${name}, tôi sẽ liên hệ lại qua email ${email} sớm nhất.`;
                    }

                    // Show success toast notification
                    showToast(
                        "Gửi Tin Nhắn Thành Công!",
                        `Cảm ơn ${name}! Chúng tôi sẽ liên hệ qua email ${email} sớm nhất có thể.`
                    );
                }, 1500);
            });
        }
    });
});
