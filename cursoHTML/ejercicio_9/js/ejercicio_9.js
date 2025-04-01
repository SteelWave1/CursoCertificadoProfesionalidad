document.addEventListener("DOMContentLoaded", function () {
    // Hacer que el menú de navegación sea fijo al hacer scroll
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("fixed");
        } else {
            nav.classList.remove("fixed");
        }
    });

    // Crear botón "Volver arriba"
    const btnTop = document.createElement("button");
    btnTop.innerText = "⬆";
    btnTop.id = "btnTop";
    document.body.appendChild(btnTop);

    btnTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        font-size: 20px;
        background: #0056b3;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;
    `;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Animación de elementos al aparecer en pantalla
    const sections = document.querySelectorAll("main h3, main h4, main p");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-in-out";
        observer.observe(section);
    });
});