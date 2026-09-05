document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('navToggle');
    var navMenu = document.getElementById('menu-nav');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        var menuLinks = navMenu.getElementsByTagName('a');
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        }
    }
});
