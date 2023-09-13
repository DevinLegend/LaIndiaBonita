// Toggle behavior for the hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
        navMenu.classList.add('active');
    } else {
        navMenu.style.display = 'none';
        navMenu.classList.remove('active');
    }
});

// Close the nav menu when any link is clicked on mobile view
document.querySelectorAll('#nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        // Check if the screen width is less than or equal to 768px
        if (window.innerWidth <= 768) {
            document.getElementById('nav-menu').style.display = 'none';
        }
    });
});

// Adjust the nav menu display when the window is resized
window.addEventListener('resize', function() {
    var navMenu = document.getElementById('nav-menu');
    
    // If the screen width is larger than 768px
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex'; // Forcefully set it to flex
    } else if (!navMenu.classList.contains('active')) {
        // If the screen width is less than 768px and the menu is not active
        navMenu.style.display = 'none';
    }
});
