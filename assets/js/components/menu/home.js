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
                title: 'JLSYSTEM AllPass',
                subtitle: 'As IAs mais poderosas do mercado em uma única assinatura'
            },
        
            
menuItems: [
  {
    text: 'Domínios',
    link: '/dominios',
    hasDropdown: false
  },
  {
    text: 'Hospedagem e Sites',
    link: '#',
    hasDropdown: true,
    dropdownItems: [
      { text: 'Hospedagem de Sites', link: '/hospedagem' },
      { text: 'Criação de Sites', link: '#/website' },
      { text: 'Servidores VPS', link: '/vps' },
      { text: 'Hospedagem WordPress', link: '/wordpress' }
    ]
  },
  {
    text: 'Email',
    link: '/email',
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
    text: 'AllPass',
    link: '/allpass',
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


            menu: [{
                text: 'Home',
                link: '#',
                desc: 'Página inicial'
            }, {
                text: 'Sobre',
                link: '#',
                desc: 'Quem somos'
            }, {
                text: 'Sobre',
                link: '#',
                desc: 'Quem somos'
            }, {
                text: 'Sobre',
                link: '#',
                desc: 'Quem somos'
            }, {
                text: 'Serviços',
                link: '#',
                desc: 'O que fazemos'
            }, {
                text: 'Contacto',
                link: '#',
                desc: 'Fale conosco'
            }]
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


    },



    template: await get_template('./assets/js/components/menu/home')
}