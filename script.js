
function showLang(lang) {
  document.getElementById('content-pl').classList.add('hidden');
  document.getElementById('content-en').classList.add('hidden');
  document.getElementById('content-' + lang).classList.remove('hidden');
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
