  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.background = a.getAttribute('href') === '#' + current ? 'var(--g50)' : '';
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--g600)' : '';
    });
  });

const certifications = {

  cert1: {

    title: "Certification HTML / CSS",

    icon: "🌐",

    category: "Développement Web",

    justification:
      "Améliorer mes compétences en développement web, renforcer mes connaissances des balises HTML/CSS et développer des compétences utiles pour mon projet professionnel.",

    desc:
      "Cette formation HTML5 & CSS3 est destinée aux débutants souhaitant apprendre à créer des sites web modernes et responsives. Elle permet de découvrir la structure d’une page web, la mise en forme avec CSS3 et les fonctionnalités avancées du développement front-end.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis de mieux comprendre la structure des sites web et les bonnes pratiques du développement front-end.",

    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Structuration de page",
      "Mise en forme CSS"
    ],

    tools: [
      "VS Code",
      "Chrome",
      "OpenClassrooms"
    ],

    evolution: [
      "14/10/2024 — Création de fichiers HTML/CSS",
      "16/10/2024 — Mise en forme avec CSS3",
      "17/10/2024 — Agencement des pages",
      "18/12/2024 — Fonctionnalités avancées HTML/CSS"
    ],

    images: [
      "img/certifications/htmlcss1.png",
      "img/certifications/htmlcss2.png",
      "img/certifications/htmlcss3.png"
    ],

    link:
      "https://docs.google.com/document/d/1bb68IpbFOphPrzwibHJ0Paxqn1Hi6U_g/edit?usp=sharing"
  },

  cert2: {

    title: "Certification C++",

    icon: "💻",

    category: "Programmation",

    justification:
      "Améliorer mes compétences dans un langage actuellement étudié en cours et approfondir la programmation orientée objet.",

    desc:
      "Cette formation C++ permet d’apprendre les bases du langage, la programmation orientée objet et certaines notions avancées nécessaires au développement logiciel.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis d’améliorer mes compétences en programmation et de mieux comprendre certains concepts utilisés également en Java.",

    skills: [
      "C++",
      "Programmation orientée objet",
      "Logique algorithmique",
      "Variables",
      "Fonctions"
    ],

    tools: [
      "VS Code",
      "Compilateur C++",
      "OpenClassrooms"
    ],

    evolution: [
      "20/12/2024 — Premiers pas avec C++",
      "11/01/2025 — Notions de base du C++",
      "12/01/2025 — Notions avancées du C++"
    ],

    images: [
      "img/certifications/cpp1.png",
      "img/certifications/cpp2.png",
      "img/certifications/cpp3.png"
    ],

    link:
      "https://docs.google.com/document/d/1iRqWBauxhMVjwtkDJ11werWmk9Sm8D65iQAE---ruD0/edit?usp=sharing"
  },

  cert3: {

    title: "Certification Java",

    icon: "☕",

    category: "Programmation",

    justification:
      "Envie d’apprendre un nouveau langage de programmation et améliorer mes compétences dans un langage utilisé dans le développement applicatif.",

    desc:
      "Cette formation Java permet d’apprendre les bases du langage, la programmation orientée objet et les notions avancées utilisées dans les applications Java.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis d’obtenir de bonnes bases en Java et de mieux comprendre la programmation orientée objet.",

    skills: [
      "Java",
      "POO",
      "Classes",
      "Objets",
      "Méthodes"
    ],

    tools: [
      "IntelliJ IDEA",
      "Java",
      "OpenClassrooms"
    ],

    evolution: [
      "Maîtrisez les bases de Java",
      "Programmation orientée objet",
      "Approfondissement Java",
      "Quiz Java validés"
    ],

    images: [
      "img/certifications/java1.png",
      "img/certifications/java2.png",
      "img/certifications/java3.png"
    ],

    link:
      "https://docs.google.com/document/d/1lIULw0hgpCSULEAxdxQ2xkOw1NxMGbZp-IKRD-DOU4A/edit?usp=sharing"
  },

  cert4: {

    title: "Certification JavaScript",

    icon: "🟨",

    category: "Développement Web",

    justification:
      "Découvrir les bases de JavaScript et améliorer mes compétences dans un langage que j’utilisais peu auparavant.",

    desc:
      "Cette formation JavaScript permet d’apprendre la manipulation des données, les interactions avec les pages web et la création de formulaires dynamiques.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis de découvrir l’aspect dynamique des sites web et le fonctionnement du JavaScript côté client.",

    skills: [
      "JavaScript",
      "DOM",
      "Formulaires",
      "Interaction web",
      "Variables"
    ],

    tools: [
      "VS Code",
      "Chrome",
      "JavaScript"
    ],

    evolution: [
      "Manipulation des données",
      "Création de fichiers JavaScript",
      "Interaction avec une page web",
      "Création de formulaires"
    ],

    images: [
      "img/certifications/js1.png",
      "img/certifications/js2.png",
      "img/certifications/js3.png"
    ],

    link:
      "https://docs.google.com/document/d/11iX1L0q1-7PjhiTQu7iY4lG-9ipFQud9fLyB1jtdK3Q/edit?usp=sharing"
  },

  cert5: {

    title: "Certification Git / GitHub",

    icon: "🐙",

    category: "Versioning",

    justification:
      "Certification réalisée suite à une demande des professeurs mais également par curiosité afin d’améliorer mes projets.",

    desc:
      "Cette formation Git/GitHub permet d’apprendre les commandes principales de Git, la gestion des dépôts et la résolution des erreurs courantes.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’aide aujourd’hui dans mes projets scolaires et personnels ainsi que dans le travail collaboratif.",

    skills: [
      "Git",
      "GitHub",
      "Versioning",
      "Commandes Git",
      "Collaboration"
    ],

    tools: [
      "Git Bash",
      "GitHub",
      "VS Code"
    ],

    evolution: [
      "25/09/2025 — Premiers pas avec Git",
      "02/10/2025 — Commandes de base Git",
      "13/10/2025 — Gestion des dépôts",
      "14/10/2025 — Résolution des erreurs courantes"
    ],

    images: [
      "img/certifications/git1.png",
      "img/certifications/git2.png",
      "img/certifications/git3.png"
    ],

    link:
      "https://docs.google.com/document/d/1Y4gEfW0G91sM2iDzDQksEQ0baqe-FbIlDWjtPRQOPeg/edit?usp=sharing"
  },

  cert6: {

    title: "Certification POO PHP",

    icon: "🐘",

    category: "Développement Back-end",

    justification:
      "Améliorer mes compétences en programmation orientée objet avec PHP.",

    desc:
      "Cette formation permet d’apprendre la programmation orientée objet en PHP, l’héritage, l’abstraction et l’organisation du code.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis d’aller plus loin dans les notions de POO déjà utilisées en cours.",

    skills: [
      "PHP",
      "POO",
      "Héritage",
      "Interfaces",
      "Abstraction"
    ],

    tools: [
      "PHP",
      "VS Code",
      "OpenClassrooms"
    ],

    evolution: [
      "28/11/2025 — Utilisation des objets",
      "28/11/2025 — Héritage",
      "29/04/2025 — Organisation du code"
    ],

    images: [
      "img/certifications/php1.png",
      "img/certifications/php2.png",
      "img/certifications/php3.png"
    ],

    link:
      "https://docs.google.com/document/d/1GRYu5LRdX9rHi7-PuJGBGHraia5uMPiwnJBpHcdCxo4/edit?usp=sharing"
  },

  cert7: {

    title: "Architecture MVC en PHP",

    icon: "🏗️",

    category: "Architecture Logicielle",

    justification:
      "Améliorer mes compétences sur l’architecture MVC et mieux structurer mes projets PHP.",

    desc:
      "Cette formation MVC en PHP permet d’apprendre à séparer les modèles, vues et contrôleurs afin d’obtenir un code plus maintenable et structuré.",

    plateforme:
      "OpenClassrooms",

    resultat:
      "Cette certification m’a permis d’améliorer mes compétences en architecture logicielle et de mieux organiser mes projets PHP.",

    skills: [
      "MVC",
      "PHP",
      "Architecture",
      "Organisation du code",
      "Debug"
    ],

    tools: [
      "PHP",
      "VS Code",
      "Serveur local"
    ],

    evolution: [
      "29/11/2025 — Isolation modèle/vue",
      "30/11/2025 — Factorisation du code",
      "01/12/2025 — MVC orienté objet"
    ],

    images: [
      "img/certifications/mvc1.png",
      "img/certifications/mvc2.png",
      "img/certifications/mvc3.png"
    ],

    link:
      "https://docs.google.com/document/d/16F7OS1dwX04lVMhNxghvJN1XZzSK9qV6pRadHpn038E/edit?usp=sharing"
  }

};

function openModal(certKey){

  const cert = certifications[certKey];

  document.getElementById("modalTitle").textContent = cert.title;

  document.getElementById("modalCategory").textContent = cert.category;

  document.getElementById("modalDesc").textContent = cert.desc;

  document.getElementById("modalIcon").textContent = cert.icon;

  document.getElementById("modalLink").href = cert.link;


  document.getElementById("certModal").style.display = "flex";
  const justificationSection =
  document.getElementById("modalJustification").parentElement;

if(cert.justification && cert.justification.trim() !== ""){

  justificationSection.style.display = "block";

  document.getElementById("modalJustification").textContent =
    cert.justification;

}else{

  justificationSection.style.display = "none";

}
}

function closeModal(){

  document.getElementById("certModal").style.display = "none";

}

window.onclick = function(event){

  const modal = document.getElementById("certModal");

  if(event.target === modal){

    closeModal();

  }

}

const stages = {

  stage1: {

    title: "Losia Digital",

    dates:
      "Du 13/05/2025 au 25/06/2025",

    description:
      "Losia Digital est une activité spécialisée dans la création de sites internet modernes et responsives pour les entreprises et indépendants. Elle propose des services de web design, développement web, identité visuelle et optimisation de la présence en ligne. L’objectif est d’accompagner les clients dans la création d’une communication numérique professionnelle et adaptée à leurs besoins.",

    missions: [

      "Développement de fonctionnalités webcréation d'une page ajouter des kilomètre à l'objectif pour le site de l'association ensemble contre l'avc",

      "Correction de création d'un  site vitrine wordpress pour une entreprise",

    ],

    images: [

      "img/stages/stage1-1.jpg",

      "img/stages/stage1-2.jpg",

      "img/stages/stage1-3.jpg"

    ]

  },

  stage2: {

    title: "Cholet Services",

    dates:
      "Du 05/01/2026 au 13/02/2026",

    description:
      "Cholet Services est une association de services à la personne située à Cholet, active depuis plus de 30 ans. Elle propose des prestations de ménage, jardinage, manutention, bricolage et aide à domicile pour les particuliers et les entreprises. L’association s’inscrit dans l’économie sociale et solidaire en accompagnant des personnes vers le retour à l’emploi grâce à des missions professionnelles adaptées.",

    missions: [

      "Ressencer les amélioration à faire sur le site existant back-end",

      "Gestion de base Faire les mises à jours de Wordpress, des extensions ainsi que de PhP données",

      "Tests et Refonte du site WordPress (correction de quelque erreurs typographique et de couleurs)",

      "Proposer une extension au site",
      
      "Demander ce que les salariés ont comme besoins",

      "Le présenter au bureau ainsi qu'au salariés qui vont l'utiliser et expliquer les fonctionnalités",

      "Modifier la BDD",

      "Créer les fonctionnalités de l'extension du site",

      "Insérer les fonctionnalités dans un iframe sur wp",

      "Création de procédure pour aider l'entreprise à être autonome sans mon besoin"

    ],

    images: [

      "img/stages/stage2-1.jpg",

      "img/stages/stage2-2.jpg",

      "img/stages/stage2-3.jpg"

    ]

  }

};

let currentStageImages = [];

let currentSlideIndex = 0;

function openStageModal(stageKey){

  const stage = stages[stageKey];

  document.getElementById("stageTitle").textContent =
    stage.title;

  document.getElementById("stageDates").textContent =
    stage.dates;

  document.getElementById("stageDescription").textContent =
    stage.description;

  // MISSIONS

  const missions =
    document.getElementById("stageMissions");

  missions.innerHTML = "";

  stage.missions.forEach(mission => {

    missions.innerHTML += `
      <li>${mission}</li>
    `;

  });

  // CAROUSEL

  currentStageImages = stage.images;

  currentSlideIndex = 0;

  updateCarousel();

  document.getElementById("stageModal").style.display =
    "flex";
}

function closeStageModal(){

  document.getElementById("stageModal").style.display =
    "none";
}

function updateCarousel(){

  document.getElementById("carouselImage").src =
    currentStageImages[currentSlideIndex];
}

function nextSlide(){

  currentSlideIndex++;

  if(currentSlideIndex >= currentStageImages.length){

    currentSlideIndex = 0;
  }

  updateCarousel();
}

function prevSlide(){

  currentSlideIndex--;

  if(currentSlideIndex < 0){

    currentSlideIndex =
      currentStageImages.length - 1;
  }

  updateCarousel();
}

window.addEventListener("click", function(e){

  const modal =
    document.getElementById("stageModal");

  if(e.target === modal){

    closeStageModal();
  }

});


const backToTop = document.getElementById("backToTop");

/* Affiche le bouton après 300px */
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

/* Remonte en douceur */
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});