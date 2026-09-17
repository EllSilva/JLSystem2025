import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            brandTitle: 'Hospedagens e sites',
            brandUrl: '#/website', // URL para a página principal
            navItems: [
                { label: 'Criação de Sites', url: '#/website', active: false },
                { label: ' Sistema e Apps', url: '/', active: false },
                { label: 'Email Corporativo', url: '#/email-profissional', active: false },
                { label: 'Hospedagem', url: '/', active: true },

                { label: 'Dominio', url: '/', active: false },
            ],


        }

    },

    methods: {

    },

    async mounted() {


    },
    template: await get_template('./assets/js/view/servicos/hospedagem')
}