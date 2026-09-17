import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            precoPorEmail: 10000,
            qtdEmail: 5,
            dominioSelecionado: null,
            dominios: [{
                nome: ".CO.AO",
                preco: 22990
            }, {
                nome: ".COM",
                preco: 15000
            }, {
                nome: ".ORG",
                preco: 18000
            }, {
                nome: ".AO",
                preco: 30000
            }],

            brandTitle: 'Hospedagens e sites',
            brandUrl: '#/website', // URL para a página principal
            navItems: [
                { label: 'Criação de Sites', url: '#/website', active: false },
                { label: ' Sistema e Apps', url: '/', active: false },
                { label: 'Email Corporativo', url: '#/email-profissional', active: true },
                { label: 'Hospedagem', url: '#/hospedagem-de-sites', active: false },

                { label: 'Dominio', url: '/', active: false },
            ],
        }

    },


    computed: {
        // Propriedade computada que retorna os estilos reativos para a imagem
        bgStyle() {
            const scaleValue = 1 + (this.scrollY * 0.0008);
            const opacityValue = Math.max(1 - (this.scrollY * 0.001), 0.3);

            return {
                transform: `scale(${scaleValue})`,
                opacity: opacityValue
            };
        },
        precoDominio() {
            return this.dominioSelecionado ? this.dominioSelecionado.preco : 0;
        },
        totalEmails() {
            return (this.qtdEmail || 0) * this.precoPorEmail;
        },
        valorTotal() {
            return this.precoDominio + this.totalEmails;
        }
    },
    created() {
        this.dominioSelecionado = this.dominios[0];
    },


    methods: {
        formatarPreco(valor) {
            return new Intl.NumberFormat('pt-AO', {
                minimumFractionDigits: 2
            }).format(valor) + ' Kz';
        },
        finalizarPedido() {
            const numero = "244952472527";
            const texto = `Olá! Gostaria de solicitar o seguinte pacote de e-mails corporativos:\n\n` +
                `🌐 *Domínio:* ${this.dominioSelecionado.nome}\n` +
                `✉️ *Quantidade de E-mails:* ${this.qtdEmail}\n` +
                `💰 *Valor Total:* ${this.formatarPreco(this.valorTotal)}\n\n` +
                `Aguardando retorno para prosseguir com o pedido.`;

            // Codifica a mensagem para formato de URL
            const urlWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(urlWhatsapp, '_blank');
        }
    },

    async mounted() {


    },
    template: await get_template('./assets/js/view/servicos/email')
}