// Récupérer l'élément avec l'ID "test" (votre flèche)
let navarrow = document.getElementById("arrow");

// Ajouter un gestionnaire d'événements "click" à la flèche
navarrow.addEventListener("click", function () {
    // Rediriger vers "index.html" lorsque la flèche est cliquée
    window.location.href = "index.html";
});

// Définir le curseur sur "pointer" lorsque l'utilisateur survole la flèche
navarrow.addEventListener("mouseover", function () {
    navarrow.style.cursor = "pointer";
});



window.onload = function () {
    Particles.init({
        selector: ".background"
    });
};
const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
        {
            breakpoint: 768,
            options: {
                color: ["#faebd7", "#03dac6", "#ff0266"],
                maxParticles: 43,
                connectParticles: true
            }
        }
    ]
});

