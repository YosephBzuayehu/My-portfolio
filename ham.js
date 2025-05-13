// Toggle sidebar
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const aside = document.querySelector('.aside');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth <= 1199 && 
        !aside.contains(e.target) && 
        !hamburger.contains(e.target)) {
        aside.classList.remove('open');
    }
});

// Close sidebar when clicking nav links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1199) {
            document.querySelector('.aside').classList.remove('open');
        }
    });
});