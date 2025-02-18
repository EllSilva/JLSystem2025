import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home",
            importacao: "importacao0",
            exportacao: "exportacao0",
            bordagem: "bordagem0",

        }

    },

    methods: {

    },

    async mounted() {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            slidesPerView: "auto",
            slidesPerView: 4,

            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    },
    template: await get_template('./assets/js/view/servicos/flyers')
}
