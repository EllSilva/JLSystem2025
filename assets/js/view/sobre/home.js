import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      title: "home",
      activeIndex: 1,   // desktop (já começa ativo no segundo)
      activeMobile: null, // mobile

      services: [
        "Websites",
        "Aplicações",
        "Hospedagem",
        "Loja Virtual",
        "Logotipo",
        "Portfólio",
        "Cartões",
        "Folder",
        "Marketing ",
        "Video Marketing",
        "Consultoria de TI",
      ],
      index: 0,          // índice da palavra atual
      charIndex: 1,      // começa com a primeira letra
      deleting: false,   // flag para apagar
      displayedText: "", // texto que aparece no slider
      blink: true        // controle do cursor piscante
    };
  },

  methods: {
    typeEffect() {
      const currentText = this.services[this.index];

      if (!this.deleting) {
        // escrevendo
        this.displayedText = currentText.substring(0, this.charIndex);
        this.charIndex++;
        if (this.charIndex > currentText.length) {
          this.deleting = true;
          setTimeout(this.typeEffect, 1500); // pausa antes de apagar
          return;
        }
      } else {
        // apagando, mas nunca a primeira letra
        this.displayedText = currentText.substring(0, this.charIndex);
        this.charIndex--;
        if (this.charIndex === 1) {
          this.deleting = false;
          this.index = (this.index + 1) % this.services.length;
        }
      }

      const speed = this.deleting ? 70 : Math.random() * (150 - 80) + 80;
      setTimeout(this.typeEffect, speed);
    },

    activate(index) {
      this.activeIndex = index;
    },
    toggleMob(index) {
      this.activeMobile =
        this.activeMobile === index ? null : index;
    },


  },

  async mounted() {
    // inicia mostrando a primeira letra
    this.displayedText = this.services[0][0];

    // cursor piscando
    setInterval(() => {
      this.blink = !this.blink;
    }, 500);

    // começa o efeito de digitação
    this.typeEffect();

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
  template: await get_template("./assets/js/view/sobre/home"),
};
