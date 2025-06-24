document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    document.querySelector('.slider-container').addEventListener('click', function(e) {
        if (e.target.classList.contains('next-btn')) {
            showSlide(currentSlide + 1);
        } else if (e.target.classList.contains('prev-btn')) {
            showSlide(currentSlide - 1);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    document.querySelectorAll('.info-block, .service-card, .team-member, .contact-info, .contact-form')
        .forEach(el => el.classList.add('animate-on-scroll'));
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    document.querySelector('.slider-container').addEventListener('click', function(e) {
        if (e.target.classList.contains('next-btn')) {
            showSlide(currentSlide + 1);
        } else if (e.target.classList.contains('prev-btn')) {
            showSlide(currentSlide - 1);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            
            resetErrors([nameInput, emailInput, messageInput]);
            [nameError, emailError, messageError].forEach(el => el.textContent = '');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                showError(nameInput, nameError, 'Как тебя зовут то?');
                isValid = false;
            } else if (nameInput.value.trim().length < 2) {
                showError(nameInput, nameError, 'Имя должно содержать хотя бы 2 символа');
                isValid = false;
            }
            
            if (!emailInput.value.trim()) {
                showError(emailInput, emailError, 'введи email и жди повестку');
                isValid = false;
            } else if (!validateEmail(emailInput.value.trim())) {
                showError(emailInput, emailError, 'Пожалуйста, введите корректный email еже');
                isValid = false;
            }
            
            if (!messageInput.value.trim()) {
                showError(messageInput, messageError, 'Кабанчиком, введите ваше сообщение');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                showError(messageInput, messageError, 'Сообщение должно содержать минимум 10 символов ЭЭЭЭЭ');
                isValid = false;
            }
            
            if (isValid) {
                alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время ЙОООУ. ');
                feedbackForm.reset();
            }
        });
    }

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
    }

    function resetErrors(inputs) {
        inputs.forEach(input => input.classList.remove('error'));
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});