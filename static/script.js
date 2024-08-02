document.addEventListener('DOMContentLoaded', () => {
    // Animación al desplazar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Animación de barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const skillsObserver = new IntersectionObserver(animateSkills, observerOptions);
    skillsObserver.observe(skillsSection);

    // Modal de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    const projectData = {
        1: {
            title: 'Proyecto 1',
        
            description: 'Descripción detallada del Proyecto 1.',
            pdf: './static/informe primer proyecto.pdf'
        },

        2: {
            title: 'Proyecto 2',
            description: 'Descripción detallada del Proyecto 1.',
            pdf: './static/CSAT.pdf'
        },

        3: {
            title: 'Proyecto 3',
            description: 'Descripción detallada del Proyecto 1.',
            pdf: './static/CSAT_DASBOARD.pdf'
        },
        // Añade más proyectos aquí
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalPDF.src = project.pdf;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario, por ejemplo usando fetch()
        formStatus.textContent = '¡Mensaje enviado con éxito!';
        contactForm.reset();
    });

    // Botón Volver Arriba
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navegación móvil
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '&#9776;'; // Icono de hamburguesa
    navToggle.classList.add('nav-toggle');
    document.querySelector('nav').prepend(navToggle);

    const navList = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Cerrar menú al hacer clic en un enlace
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
        });
    });

    // Ajuste de altura en dispositivos móviles
    function setMobileHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setMobileHeight();
    window.addEventListener('resize', setMobileHeight);

    // Desactivar zoom en inputs en iOS
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].name === "viewport") {
            metas[i].content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
        }
    }
});