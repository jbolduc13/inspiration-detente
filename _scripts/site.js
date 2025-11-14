  document.addEventListener('DOMContentLoaded', function() {

    // Sélecteur du menu mobile (collapse)
    const navDiv = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    if (!navDiv || !toggler) return; // sécurité si les éléments n'existent pas

    // Fonction pour fermer le menu
    function hideMenu() {
      const bsCollapse = new bootstrap.Collapse(navDiv, { toggle: false });
      bsCollapse.hide();
    }

    // Fermer le menu quand on clique sur un lien
    const menuLinks = navDiv.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', hideMenu);
      link.addEventListener('touchend', hideMenu); // pour mobile
    });

    // Fermer le menu si on clique ou touche en dehors
    function handleOutside(e) {
      if (navDiv.classList.contains('show') && !navDiv.contains(e.target) && !toggler.contains(e.target)) {
        hideMenu();
      }
    }

    document.addEventListener('click', handleOutside);
    document.addEventListener('touchstart', handleOutside);

  });