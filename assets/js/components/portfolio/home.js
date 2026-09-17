import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            currentFilter: 'Todos',
            currentSlide: 0,
            cardsPerView: 3,
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
            ],

            animated: false,
            stats: [{
                icon: 'bi-box-seam',
                value: 280,
                currentValue: 0,
                label: 'Projectos'
            }, {
                icon: 'bi-award',
                value: 115,
                currentValue: 0,
                label: 'Logotipos'
            }, {
                icon: 'bi-person-badge',
                value: 150,
                currentValue: 0,
                label: 'Cartões Visita'
            }, {
                icon: 'bi-card-image',
                value: 90,
                currentValue: 0,
                label: 'Imagens Corporativa'
            }]
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
        },






        initScrollObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.animated) {
                        this.animated = true;
                        this.animateNumbers();
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3
            });

            if (this.$refs.statsSection) {
                observer.observe(this.$refs.statsSection);
            }
        },
        animateNumbers() {
            const duration = 2000;
            const steps = 60;
            const intervalTime = duration / steps;

            this.stats.forEach(stat => {
                const increment = stat.value / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.value) {
                        stat.currentValue = stat.value;
                        clearInterval(timer);
                    } else {
                        stat.currentValue = Math.floor(current);
                    }
                }, intervalTime);
            });
        }

    },
    mounted() {
        this.initScrollObserver();
        const updateCardsPerView = () => {
            if (window.innerWidth <= 650) this.cardsPerView = 1;
            else if (window.innerWidth <= 992) this.cardsPerView = 2;
            else this.cardsPerView = 3;
        };
        window.addEventListener('resize', updateCardsPerView);
        updateCardsPerView();
    },

    template: await get_template('./assets/js/components/portfolio/home')
}