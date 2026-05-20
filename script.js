document.addEventListener('DOMContentLoaded', () => {

    /* ==================== SELECT ACCENT THEME FROM LOCALSTORAGE ==================== */
    const savedTheme = localStorage.getItem('portfolio-accent-theme');
    if (savedTheme) {
        // Always keep dark-theme as the base class
        document.body.className = 'dark-theme';
        if (savedTheme !== 'cyan-purple') {
            document.body.classList.add(savedTheme);
        }
        // Set active state on dot
        document.querySelectorAll('.color-dot').forEach(dot => {
            if (dot.getAttribute('data-theme') === savedTheme) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    /* ==================== THEME ACCENT SWITCHER MENU ==================== */
    const switcherToggle = document.getElementById('switcher-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const colorDots = document.querySelectorAll('.color-dot');

    if (switcherToggle && themeMenu) {
        switcherToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            themeMenu.classList.toggle('active');
        });

        // Close theme menu when clicking outside
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
                document.body.className = 'dark-theme'; // Reset to dark-theme base
                if (selectedTheme !== 'cyan-purple') {
                    document.body.classList.add(selectedTheme);
                }
                
                localStorage.setItem('portfolio-accent-theme', selectedTheme);
                
                // Show notification toast
                showToast("Đã Thay Đổi Giao Diện", `Chuyển thành công sang tông màu ${dot.getAttribute('title')}`);
            });
        });
    }

    /* ==================== CUSTOM CURSOR LEAP FOLLOWER ==================== */
    const customCursor = document.getElementById('custom-cursor');
    const cursorGlow = document.getElementById('cursor-glow');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let glowX = 0, glowY = 0;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor if hidden (when moving mouse in)
        if (customCursor && cursorGlow) {
            customCursor.style.opacity = '1';
            cursorGlow.style.opacity = '1';
        }
    });

    // Hide cursor when leaving screen
    document.addEventListener('mouseleave', () => {
        if (customCursor && cursorGlow) {
            customCursor.style.opacity = '0';
            cursorGlow.style.opacity = '0';
        }
    });

    const coreEye = document.getElementById('core-eye');
    const corePupil = document.getElementById('core-pupil');

    // Smooth follower using requestAnimationFrame
    function animateCursor() {
        // Direct follow for inner dot
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        
        // Lerped delay follow for outer glow circle
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;

        if (customCursor && cursorGlow) {
            customCursor.style.left = `${cursorX}px`;
            customCursor.style.top = `${cursorY}px`;
            
            cursorGlow.style.left = `${glowX}px`;
            cursorGlow.style.top = `${glowY}px`;
        }

        // Eye-tracking calculation for Agent Core pupil
        if (coreEye && corePupil) {
            const rect = coreEye.getBoundingClientRect();
            // Get center point of eye
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            // Distance vector from eye center to mouse
            const dx = mouseX - eyeCenterX;
            const dy = mouseY - eyeCenterY;

            // Calculate angle and scale/clamp distance
            const angle = Math.atan2(dy, dx);
            const rawDist = Math.sqrt(dx * dx + dy * dy);
            // Move pupil slightly, clamp to max 14px to keep inside bounds
            const moveDist = Math.min(rawDist * 0.06, 14);

            const translateX = Math.cos(angle) * moveDist;
            const translateY = Math.sin(angle) * moveDist;

            corePupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Attach hover effects to active targets
    function setupCursorHovers() {
        const hoverTargets = document.querySelectorAll('.hover-target, a, button, .project-card, .contact-card');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            target.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }
    setupCursorHovers();

    /* ==================== TYPING TEXT ANIMATION ==================== */
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
                // Pause at the end of the word
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typingSpeed);
        }
        setTimeout(type, 1000);
    }

    /* ==================== MOBILE HAMBURGER MENU ==================== */
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

        // Close menu when clicking link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        });
    }

    /* ==================== HEADER ACTIVE BACKGROUND & BACK-TO-TOP ==================== */
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        // Sticky Header Backdrop
        if (window.scrollY >= 50) {
            header.classList.add('scroll-active');
        } else {
            header.classList.remove('scroll-active');
        }

        // Show/Hide Scroll-to-top button
        if (window.scrollY >= 400) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
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

    /* ==================== INTERACTIVE CANVAS PARTICLES ==================== */
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        let mouse = {
            x: null,
            y: null,
            radius: 120
        };

        // Resize Canvas
        function resizeCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            initParticles();
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Track mouse position inside hero
        window.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Particle Blueprint
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            // Draw individual particle
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            // Update particle physics
            update() {
                // Keep inside screen border
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse interaction / Repel force
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        
                        // Push away from mouse
                        this.x -= forceDirectionX * 2;
                        this.y -= forceDirectionY * 2;
                    }
                }

                // Regular movement
                this.x += this.directionX;
                this.y += this.directionY;

                this.draw();
            }
        }

        // Initialize particles
        function initParticles() {
            particlesArray = [];
            let numberOfParticles = Math.floor((canvas.width * canvas.height) / 13000);
            if (numberOfParticles > 80) numberOfParticles = 80;
            
            // Neon accent color based on theme
            const rootStyles = getComputedStyle(document.documentElement);
            const accent1 = rootStyles.getPropertyValue('--accent-1').trim() || '#00f2fe';

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 1.5) + 0.5;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = accent1 + '33'; // Add hex opacity (33 = ~20%)

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Draw connections between neighboring particles
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

        // Particle Loop
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
        
        // Refresh particles on palette changes
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                setTimeout(initParticles, 100);
            });
        });
    }

    /* ==================== INTERSECTION OBSERVER: SCROLL REVEAL ==================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it's a stats card, trigger counter
                if (entry.target.classList.contains('about-info')) {
                    animateStats();
                }

                // If it's the skills list, animate bars
                if (entry.target.classList.contains('about-skills')) {
                    animateSkillBars();
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

    // Stat Numbers Counter Animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            if (stat.classList.contains('counted')) return; // Run once
            stat.classList.add('counted');
            
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const duration = 2000; // 2 seconds
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            const timer = setInterval(() => {
                current += 1;
                stat.textContent = current;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }

    // Skill Progress Bars Width Animation
    function animateSkillBars() {
        const skillProgresses = document.querySelectorAll('.skill-progress');
        skillProgresses.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width;
        });
    }

    /* ==================== ACTIVE MENU NAVIGATION LINK ON SCROLL ==================== */
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

    /* ==================== PORTFOLIO PROJECTS GRID FILTER ==================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from other buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    // Trigger fade in animation
                    card.classList.remove('fade-out');
                    card.classList.add('fade-in');
                } else {
                    card.classList.remove('fade-in');
                    card.classList.add('fade-out');
                    // Hide after animation finishes
                    setTimeout(() => {
                        if (card.classList.contains('fade-out')) {
                            card.style.display = 'none';
                        }
                    }, 400);
                }
            });
            
            // Re-setup custom cursor hovers since layout reflowed
            setTimeout(setupCursorHovers, 450);
        });
    });

    /* ==================== PORTFOLIO PROJECT DETAIL LIGHTBOX MODAL ==================== */
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const projectZooms = document.querySelectorAll('.project-zoom');
    
    // Elements to fill dynamically
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalBtnCode = document.getElementById('modal-btn-code');
    const modalBtnDemo = document.getElementById('modal-btn-demo');

    // Make sure projectData is loaded
    if (projectModal && modalClose) {
        
        // Open modal on project card click or zoom click
        projectCards.forEach(card => {
            const trigger = card.querySelector('.project-img-wrapper');
            trigger.addEventListener('click', () => {
                const id = parseInt(card.getAttribute('data-id'));
                openModal(id);
            });
        });

        function openModal(id) {
            // Find data
            const project = projectsData.find(p => p.id === id);
            if (!project) return;

            // Fill text
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalCategory.textContent = project.categoryLabel;
            modalTitle.textContent = project.title;
            modalDesc.textContent = project.description;

            // Fill tags
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.textContent = tag;
                modalTags.appendChild(tagSpan);
            });

            // Set button links
            modalBtnCode.href = project.codeLink;
            modalBtnDemo.href = project.demoLink;

            // Show modal
            projectModal.classList.add('active');
            document.body.classList.add('modal-open');
            document.body.classList.remove('cursor-hover'); // Reset cursor state
        }

        // Close modal
        modalClose.addEventListener('click', closeModal);
        
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });

        function closeModal() {
            projectModal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }

        // Keyboard ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    /* ==================== CONTACT FORM ACTION SIMULATION ==================== */
    const contactForm = document.getElementById('contact-form');
    const btnSubmit = document.getElementById('btn-submit');

    if (contactForm && btnSubmit) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
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

                // Show success toast notification
                showToast(
                    "Gửi Tin Nhắn Thành Công!",
                    `Cảm ơn ${name}! Chúng tôi sẽ liên hệ qua email ${email} sớm nhất có thể.`
                );
            }, 1500);
        });
    }

    /* ==================== TOAST NOTIFICATION UTILITY ==================== */
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
});
