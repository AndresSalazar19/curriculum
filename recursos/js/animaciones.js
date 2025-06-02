document.addEventListener('DOMContentLoaded', function () {
    const secciones = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const animacion = (id === 'perfil') ? 'animate__fadeInLeft' :
                                  (id === 'experiencia') ? 'animate__fadeInRight' :
                                  (id === 'proyectos') ? 'animate__zoomIn' :
                                  'animate__fadeInUp';

                entry.target.classList.add('animate__animated', animacion);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));
});
