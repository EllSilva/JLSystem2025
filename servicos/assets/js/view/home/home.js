import get_template from '../../components/get_template.js'


export default {


  data: function () {
    return {
        activeIndex: 1,   // desktop (já começa ativo no segundo)
      activeMobile: null, // mobile
    }

  },

  methods: {
   activate(index) {
      this.activeIndex = index;
    },
    toggleMob(index) {
      this.activeMobile =
        this.activeMobile === index ? null : index;
    },
  },

  async mounted() {




    var swiper = new Swiper(".swiper", {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 18
        },
        1188: {
          slidesPerView: 6,
          spaceBetween: 24
        }
      }
    });

        var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".swiper_testemuno", {
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 18
        },
        1188: {
          slidesPerView: 6,
          spaceBetween: 24
        }
      }
    });




  },

  template: await get_template('./assets/js/view/home/home')
}