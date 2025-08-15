document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNav = document.querySelector('.mobile-nav-links');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links-list a'); 

    hamburger.addEventListener('click', () => {
        const isActive = mobileNav.classList.toggle('active');

        if (isActive) {
            document.body.classList.add('no-scroll');
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            document.body.classList.remove('no-scroll');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const targetId = link.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);

            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';

            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300); 
        });
    });
});
