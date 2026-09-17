import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {

            // O menu começa fechado
            isOpen: false,

            showTopBar: true,
            showSearch: false,
            isScrolled: false,
            searchQuery: '',
            notificacoes: 3,
            topBar: {
                title: 'Website mais poderosas',
                subtitle: 'Os Melhores Site e mais poderosas do mercado entregue em apenas 15 dias'
            },


            menuItems: [{
                    text: 'Projectos',
                    link: '#/projectos',
                    hasDropdown: false
                },
                {
                    text: 'Hospedagem e Sites',
                    link: '#',
                    hasDropdown: true,
                    dropdownItems: [
                        { text: 'Hospedagem de Sites', link: '#/hospedagem-de-sites' },
                        { text: 'Criação de Sites', link: '#/website' },
                        { text: 'Email Corporativo', link: '#/email-profissional' },
                    ]
                },
                {
                    text: 'Design',
                    link: '#/designer-grafico',
                    hasDropdown: false
                },
                {
                    text: 'Soluções',
                    link: '#',
                    hasDropdown: true,
                    // URLs para as opções do Mega Menu
                    megaMenu: {
                        afiliados: '/afiliados',
                        revenda: '/revenda',
                        ssl: '/certificado-ssl',
                        vps: '/vps',
                        consultor: '/contato'
                    }
                },
                {
                    text: 'contato',
                    link: '#/contato',
                    hasDropdown: false
                }
            ],


            hero: {
                discount: 79,
                price: '10,09',
                features: [
                    'Ferramentas com IA para criar sites',
                    'Migração de sites grátis',
                    'Suporte em português 24h',
                    'Até 3 domínios grátis'
                ]
            },



            loading: false,
            open: false,



        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },



    methods: {


        navegar(destino) {
            console.log("Navegando para: " + destino);
        },
        // ... seus outros métodos (toggleMenu, etc)

        handleScroll() {
            if (window.scrollY > 50) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        },

        aproveitarOferta() {
            alert(`🛒 Plano adicionado ao carrinho!`);
        },
        executarBusca() {
            if (this.searchQuery.trim() !== '') {
                alert(`🔍 Pesquisando por: "${this.searchQuery}"`);
                this.searchQuery = '';
                this.showSearch = false;
            }
        },
        verNotificacoes() {
            if (this.notificacoes > 0) {
                alert(`🔔 Alertas visualizados.`);
                this.notificacoes = 0;
            }
        },
        abrirLogin() {
            alert("👤 Abrindo Área do Cliente.");
        },


        toggleMenu() {
            this.isOpen = !this.isOpen;
        },



    },


    async mounted() {

        const container = document.querySelector('.sphere-container');
        let ticking = false;

        // 1. Atualização com Scroll
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    document.documentElement.style.setProperty('--scroll', window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 2. Interatividade Tilt com o Mouse
        window.addEventListener('mousemove', (e) => {
            const { innerWidth, innerHeight } = window;

            // Normaliza a posição do mouse de -15 a 15 graus/pixels
            const mouseX = ((e.clientX / innerWidth) - 0.5) * 30;
            const mouseY = ((e.clientY / innerHeight) - 0.5) * 30;

            container.style.setProperty('--mouse-x', `${mouseX}deg`);
            container.style.setProperty('--mouse-y', `${mouseY}deg`);
        });


    },



    template: await get_template('./assets/js/components/menu/home')
}