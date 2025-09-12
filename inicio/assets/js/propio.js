const services = [
  "Websites",
  "Aplicações",
  "Design Gráfico",
  "hospedagem",
    "Marketing digital",
  "Segurança Eletrônica",
  "Consultoria de TI"
];

let index = 0;
let charIndex = 1; // começa já com 1 letra
let deleting = false;
const slider = document.getElementById("slider");
const cursor = document.getElementById("cursor");

// cursor piscando
setInterval(() => {
  cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

function typeEffect() {
  const currentText = services[index];

  if (!deleting) {
    slider.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1500); // pausa antes de apagar
      return;
    }
  } else {
    // nunca apaga a primeira letra
    slider.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 1) {
      deleting = false;
      index = (index + 1) % services.length;
    }
  }

  // velocidade natural
  const speed = deleting ? 70 : Math.random() * (150 - 80) + 80;
  setTimeout(typeEffect, speed);
}

// começa mostrando a primeira letra já
slider.textContent = services[0][0];
typeEffect();