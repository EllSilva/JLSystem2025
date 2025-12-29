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

    methods:{
         
    },

     async mounted() {

const track = document.getElementById('sliderTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const cards = document.querySelectorAll('.card-port');

    let currentIndex = 0;

    function updateSlider() {
        const gap = 24;
        const cardWidth = cards[0].offsetWidth;
        
        // Move o slider exatamente a largura de um card + gap
        const moveAmount = (cardWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${moveAmount}px)`;

        // Atualização dos botões
        prevBtn.disabled = currentIndex === 0;
        
        // No desktop (3.3 visíveis), o limite é o total de cards menos os 3 inteiros
        const visibleFullCards = Math.floor(window.innerWidth <= 768 ? 1.3 : 3.3);
        nextBtn.disabled = currentIndex >= (cards.length - visibleFullCards);
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
        currentIndex = 0; // Reseta para não quebrar o layout no resize
        updateSlider();
    });

    // Inicia corretamente
    window.onload = updateSlider;
       },
    template: await get_template('./assets/js/view/site_app/website')
}
 