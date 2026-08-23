import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      title: "home",
      activeIndex: 1,   // desktop (já começa ativo no segundo)
      activeMobile: null // mobile
    };
  },

  methods: {

      activate(index) {
      this.activeIndex = index;
    },
    toggleMob(index) {
      this.activeMobile =
        this.activeMobile === index ? null : index;
    },

    maquinaEcrever() {
      const services = [
        "Websites",
        "Aplicações",
        "hospedagem",
        "Loja Virtual",
        "Logotipo",
        "Portifolio",
        "Cartões",
        "Folder",
        "Marketing digital",
        "Video Marketing",
        "Consultoria de TI",
      ];

      let index = 0;
      let charIndex = 1; // começa já com 1 letra
      let deleting = false;
      const slider = document.getElementById("slider");
      const cursor = document.getElementById("cursor");

      // cursor piscando
      setInterval(() => {
        cursor.style.visibility =
          cursor.style.visibility === "hidden" ? "visible" : "hidden";
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
    },
  },

  async mounted() {
    this.maquinaEcrever();

  // Inicializa o PureCounter
    new PureCounter();
    
     new Swiper(this.$refs.swiperContainer, {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  
 

    AOS.init({
      duration: 1000,
    });
  },
  template: await get_template("./assets/js/view/home/home"),
};
