let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function openEmail() {
    window.location.href = "mailto:ziadhamama123@gmail.com?body=Hi Ziad,";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    function moveSlide(button, direction) {
        const carousel = button.closest('.carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
        images[activeIndex].classList.remove('active');
        let newIndex = (activeIndex + direction + images.length) % images.length;
        images[newIndex].classList.add('active');
    }
    

    // Send email using EmailJS
    emailjs.send('service_ouz5zrj', 'template_b2h615h', params)
        .then(() => {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); 
        })
        .catch(() => {
            alert('Oops! Something went wrong. Please try again.');
        });
});
