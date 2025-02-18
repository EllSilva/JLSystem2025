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
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },

  template: await get_template('./assets/js/view/home/home')
}