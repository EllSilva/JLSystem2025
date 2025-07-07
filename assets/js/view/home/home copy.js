import get_template from '../../components/get_template.js'
 

export default {
 

  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {

    const track = document.getElementById("sliderTrack");

    // Pausar animação automática ao interagir
    function pauseAnimation() {
      track.style.animationPlayState = 'paused';
    }
    function resumeAnimation() {
      track.style.animationPlayState = 'running';
    }

    // Touch (para celular)
    let isDown = false;
    let startX, scrollLeft;

    track.addEventListener("touchstart", (e) => {
      pauseAnimation();
      isDown = true;
      startX = e.touches[0].pageX;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener("touchend", () => {
      isDown = false;
      resumeAnimation();
    });

    // Rolar com o mouse (scroll wheel)
    const container = document.getElementById("sliderContainer");
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      pauseAnimation();
      track.scrollLeft += e.deltaY; // converte scroll vertical em horizontal
      clearTimeout(container.wheelTimeout);
      container.wheelTimeout = setTimeout(resumeAnimation, 1000); // retoma animação após 1s parado
    }, { passive: false });







  var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
  },

  template: await get_template('./assets/js/view/home/home')
}