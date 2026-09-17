import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {

            brandTitle: 'Hospedagens e sites',
            brandUrl: '#/website', // URL para a página principal
            navItems: [
                { label: 'Criação de Sites', url: '#/website', active: true },
                { label: ' Sistema e Apps', url: '/', active: false },
                { label: 'Email Corporativo', url: '#/email-profissional', active: false },
                { label: 'Hospedagem', url: '#/hospedagem-de-sites', active: false },

                { label: 'Dominio', url: '/', active: false },
            ],

            heroImage: 'assets/img/servico-3.png',
            infoText: 'Quer vender ou posicionar sua empresa no mercado digital? Comece com um site profissional',
            supportPhone: '+244 952 472 527.',
            sectionTag: 'MICROSOFT® 365',
            mainTitle: 'Construindo sua presença online com design excepcional..',
            features: [
                { icon: 'bi bi-star', text: 'Sites Institucionais e Sub Medida.', underlined: true, url: '/office-apps' },
                { icon: 'bi bi-envelope', text: 'E-mail compatível com seu domínio.', underlined: true, url: '/domain-email' },
                { icon: 'bi bi-list-task', text: 'Configuração simples e suporte ao cliente especializado.', underlined: true, url: '/support' }
            ],
            ctaButtonText: 'Veja os planos e preços.',
            ctaUrl: '/plans-and-pricing', // URL do botão principal







            abaAtiva: 'WebSite',
            abas: ['WebSite', 'Lojas Online', 'Portais'],


            currentFilter: 'Todos',
            currentSlide: 0,
            cardsPerView: 3,


            activeTab: 0,

            index: 0,
            slides: [{
                title: "Site de Websites ",
            }, {
                title: "Site de Lojas Online ",
            }, {
                title: "Site de Notícias",
            }],

            categories: ['Todos', 'Web', 'Mobile', 'AI & Cyber'],
            projects: [{
                    id: 1,
                    title: 'Maison Mary Avantguarde',
                    category: 'Web',
                    description: 'Website institucional com design moderno, responsivo e focado na valorização da marca e dos seus serviços de beleza e bem-estar.',
                    image: './assets/img/portfolio/website000.png',
                    link: 'https://maisonmary-avantguarde.com/'
                }, {
                    id: 2,
                    title: 'Ecco',
                    category: 'Web',
                    description: 'Website institucional desenvolvido para a ECCO Escritório de Contabilidade, destacando os seus serviços de contabilidade e consultoria.',
                    image: './assets/img/portfolio/website001.jpeg',
                    link: 'https://ecco.ao/index.html#/'
                },
                {
                    id: 3,
                    title: 'Melkor - engenharia e construção civil',
                    category: 'Web',
                    description: 'Website institucional, destacando os seus serviços de engenharia e construção civil, com um design moderno, profissional e responsivo.',
                    image: './assets/img/portfolio/website004.jpeg',
                    link: 'https://melkor.ao/'
                },
                {
                    id: 4,
                    title: 'Quantum Core',
                    category: 'AI & Cyber',
                    description: 'Sistema de IA autônomo focado em criptografia quântica e defesa cibernética.',
                    image: './assets/img/portfolio/website002.jpg',
                    link: 'https://meusite.com/projeto1'
                },
                {
                    id: 5,
                    title: 'Teste',
                    category: 'Web',
                    description: 'Painel de controle futurista construído inteiramente com micro-interações em CSS e Canvas.',
                    image: './assets/img/portfolio/website003.jpeg',
                    link: 'https://meusite.com/projeto1'
                },
                {
                    id: 6,
                    title: 'Teste',
                    category: 'Web',
                    description: 'Painel de controle futurista construído inteiramente com micro-interações em CSS e Canvas.',
                    image: './assets/img/portfolio/website001.jpeg',
                    link: 'https://meusite.com/projeto1'
                },
                {
                    id: 7,
                    title: 'Synth Brain',
                    category: 'AI & Cyber',
                    description: 'Algoritmo preditivo de arte generativa que lê e interpreta dados meteorológicos mundiais.',
                    image: './assets/img/portfolio/website001.jpeg'
                }
            ]
        }


    },

    computed: {
        filteredProjects() {
            if (this.currentFilter === 'Todos') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.currentFilter);
        },
        maxSteps() {
            const steps = this.filteredProjects.length - this.cardsPerView;
            return steps > 0 ? steps : 0;
        }
    },
    methods: {

        setActive(selectedIndex) {
            this.navItems.forEach((item, index) => {
                item.active = index === selectedIndex;
            });
        },

        nextSlide() {
            if (this.currentSlide < this.maxSteps) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.maxSteps;
            }
        },
        changeFilter(category) {
            this.currentFilter = category;
            this.currentSlide = 0;
        }
    },

    async mounted() {

        setInterval(() => {
            this.index = (this.index + 1) % this.slides.length;
        }, 4000);

        const updateCardsPerView = () => {
            if (window.innerWidth <= 650) this.cardsPerView = 1;
            else if (window.innerWidth <= 992) this.cardsPerView = 2;
            else this.cardsPerView = 3;
        };
        window.addEventListener('resize', updateCardsPerView);
        updateCardsPerView();

        AOS.init({
            duration: 1000,
        });

    },
    template: await get_template('./assets/js/view/site_app/website')
}