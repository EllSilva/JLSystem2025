import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            heroTitle: 'Torna a Criação de Designs Gráficos Mais Fácil',
            heroSubtitle: 'Acelera o teu processo criativo e faz designs gráficos impressionantes para os teus negócios, eventos, rede sociais e muito mais.',
            ctaButtonText: 'Começa Já',
            heroImage: './assets/img/identidade-visual.png',

            features: [{
                icon: 'bi bi-layers',
                title: 'Modelos e Funcionalidades',
                description: 'Obtém acesso a uma infinidade de modelos e funcionalidades para dares asas à tua criatividade.'
            }, {
                icon: 'bi bi-clock-history',
                title: 'Poupa Tempo e Dinheiro',
                description: 'Cria designs que se destacam dos demais em poucos minutos e de graça.'
            }, {
                icon: 'bi bi-hand-index-thumb',
                title: 'Nenhum conhecimento especial',
                description: 'Toda a gente pode criar design gráficos como um pro facilmente sem ter de ser um designer gráfico.'
            }, {
                icon: 'bi bi-tools',
                title: 'Ferramentas Excelentes',
                description: 'As nossas ferramentas de edição simples, mas magníficas, permitem-te personalizar o teu design à tua maneira.'
            }],



            showcaseSections: [{
                title: 'Milhões de Elementos Artísticos e Recursos',
                description: 'Eleva o nível do teu design com estilos de letra, formas e fundos, e com a nossa vasta biblioteca de stock de fotos e ícones.',
                buttonText: 'Começa Já',
                image: 'https://via.placeholder.com/600x400/f1f5f9/334155?text=Elementos+Artisticos',
                reverse: true
            }, {
                title: 'Gráficos Visuais Elegantes',
                description: 'Transforma já a tua grande quantidade de dados num parceiro gráfico visual! Personaliza o teu gráfico conforme desejares, e apresenta claramente os dados do teu negócio a clientes e parceiros.',
                buttonText: 'Começa Já',
                image: 'https://via.placeholder.com/600x400/e2e8f0/334155?text=Graficos+Visuais',
                reverse: false
            }, {
                title: 'Módulos Exclusivos e Bem Agrupados',
                description: 'Temos dezenas de módulos que combinam visualmente imagens, ícones e texto num conjunto coeso, tornando a criação do teu design visual mais fácil e rápido.',
                buttonText: 'Começa Já',
                image: 'https://via.placeholder.com/600x400/cbd5e1/334155?text=Modulos+Exclusivos',
                reverse: true
            }],


            stepsImage: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Editor+3+Passos',
            steps: [{
                title: 'Escolhe um Modelo',
                description: 'Escolha um modelo entre os nossos milhares de modelos para começares a criar o teu design.',
                icon: 'bi bi-layout-text-window-reverse'
            }, {
                title: 'Personaliza-o',
                description: 'Personaliza o teu design com ferramentas de edição simples mas excelentes.',
                icon: 'bi bi-sliders'
            }, {
                title: 'Exporta-o',
                description: 'Guarda o teu design no teu computador ou partilha-o online.',
                icon: 'bi bi-folder-symlink'
            }],

            logos: [{
                url: '../assets/img/clients/logo001.png',
                alt: 'Logotipo 1'
            }, {
                url: '../assets/img/clients/logo002.png',
                alt: 'Logotipo 2'
            }, {
                url: '../assets/img/portfolio/logo003.png',
                alt: 'Logotipo 3'
            }, {
                url: '../assets/img/portfolio/logo004.png',
                alt: 'Logotipo 4'
            }, {
                url: '../assets/img/portfolio/logo005.png',
                alt: 'Logotipo 5'
            }, {
                url: '../assets/img/portfolio/logo006.png',
                alt: 'Logotipo 6'
            }, {
                url: '../assets/img/portfolio/logo007.png',
                alt: 'Logotipo 7'
            }, {
                url: '../assets/img/portfolio/logo008.png',
                alt: 'Logotipo 8'
            }, {
                url: '../assets/img/portfolio/logo009.png',
                alt: 'Logotipo 9'
            }, {
                url: '../assets/img/portfolio/logo0010.png',
                alt: 'Logotipo 10'
            }]


        }

    },

    methods: {

    },

    async mounted() {

        this.$nextTick(() => {
            new Swiper(".mySwiper_logo", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: ".btn-next",
                    prevEl: ".btn-prev",
                },
            });
        });

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
    template: await get_template('./assets/js/view/servicos/identidade-visual')
}