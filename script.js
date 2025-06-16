
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-links");

  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  const langButtons = document.querySelectorAll("button[onclick^='switchLang']");
  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.innerText.toLowerCase();
      switchContent(lang);
    });
  });
});

function switchContent(lang) {
  const translations = {
    pl: {
      "o-mnie": "Psycholog kliniczny, edukator, terapeuta i rzecznik. Od 15 lat wspieram ludzi w kryzysie psychicznym i działam na rzecz zmiany systemowej w opiece psychiatrycznej.",
      "oferta": "<ul><li>Spotkania indywidualne (Otwarte Dialogi)</li><li>Szkolenia i warsztaty</li><li>Wystąpienia, konsultacje</li></ul>",
      "doswiadczenie": "Pracuję jako psycholog i edukator – z osobami młodymi, rodzicami, zespołami i instytucjami...",
      "wiedza": "<ul><li>„Psychologiczne koszty diagnozy psychiatrycznej” – Czasopismo Psychologiczne</li><li>„Peer support & recovery” – Ethics International Press</li><li>Współpraca z A. Chudzicką-Czupałą, D. Fisherem, M. Trojańską</li></ul>",
      "blog": "(w przygotowaniu)",
      "studio": "(przestrzeń dla projektów, nagrań, spotkań edukacyjnych – więcej informacji wkrótce)",
    },
    en: {
      "o-mnie": "Clinical psychologist, educator, therapist, and advocate. For 15 years, I’ve supported people in mental health crises and worked to reform psychiatric care.",
      "oferta": "<ul><li>One-on-one sessions (Open Dialogue)</li><li>Training and workshops</li><li>Talks and consultations</li></ul>",
      "doswiadczenie": "I work as a psychologist and educator – with youth, parents, teams, and institutions...",
      "wiedza": "<ul><li>“Psychiatric diagnosis stigma costs” – Czasopismo Psychologiczne</li><li>“Peer support & recovery” – Ethics International Press</li><li>Collaboration with A. Chudzicka-Czupała, D. Fisher, M. Trojańska</li></ul>",
      "blog": "(coming soon)",
      "studio": "(space for projects, recordings, educational meetings – more info soon)",
    }
  };

  Object.entries(translations[lang]).forEach(([id, content]) => {
    const section = document.querySelector(`#${id} p, #${id} ul`);
    if (section) section.innerHTML = content;
  });
}


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}