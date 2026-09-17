import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            partners: [{
                name: 'JetBackup',
                logo: 'https://cdn.worldvectorlogo.com/logos/jetbackup.svg'
            }, {
                name: 'Laravel',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
            }, {
                name: 'LiteSpeed',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/LiteSpeed_Tech_Logo.png/640px-LiteSpeed_Tech_Logo.png'
            }, {
                name: 'Microsoft',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
            }, {
                name: 'Node.js',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
            }],


            isDarkMode: false,
            activeTab: 'form',
            isSending: false,
            formSubmitted: false,
            toastMessage: '',
            horario: {
                abertura: '09:00',
                fecho: '17:00',
                fuso: 'WAT (UTC+1)',
                diasFechado: 'Sábado e Domingo'
            },
            empresa: {
                endereco: 'Gameck, rua da Igreja catolica - madeira ',
                telefone: '+244 952 472 527',
                email: 'info@h-jlsystem.com',
                whatsappLink: 'https://wa.me/244952472527'
            },
            form: {
                nome: '',
                email: '',
                assunto: 'Pré-Venda',
                mensagem: ''
            },
            actionCards: [{
                title: 'Base de Conhecimento',
                icon: 'fa-solid fa-book-bookmark',
                action: 'kb'
            }, {
                title: 'Abrir Ticket',
                icon: 'fa-solid fa-life-ring',
                action: 'ticket'
            }, {
                title: 'Informações Pré-Venda',
                icon: 'fa-solid fa-comments',
                action: 'prevenda'
            }]
        }
    },

    computed: {
        // Calcula dinamicamente se a empresa está Aberta ou Fechada em tempo real
        isOnline() {
            const now = new Date();
            const day = now.getDay(); // 0 = Domingo, 6 = Sábado
            const hour = now.getHours();

            if (day === 0 || day === 6) return false;
            return hour >= 9 && hour < 17;
        }
    },
    methods: {
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
        },
        handleCardClick(action) {
            if (action === 'ticket') {
                const ticketModal = new bootstrap.Modal(document.getElementById('ticketModal'));
                ticketModal.show();
            } else if (action === 'prevenda') {
                this.activeTab = 'form';
                this.form.assunto = 'Pré-Venda';
            } else {
                this.showToast('Redirecionando para a Base de Conhecimento...');
            }
        },
        copyToClipboard(text, fieldName) {
            navigator.clipboard.writeText(text);
            this.showToast(`${fieldName} copiado para a área de transferência!`);
        },
        showToast(msg) {
            this.toastMessage = msg;
            const toastEl = document.getElementById('copyToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        },
        submitForm() {
            this.isSending = true;
            setTimeout(() => {
                this.isSending = false;
                this.formSubmitted = true;
            }, 1200);
        },
        resetForm() {
            this.form = {
                nome: '',
                email: '',
                assunto: 'Pré-Venda',
                mensagem: ''
            };
            this.formSubmitted = false;
        }
    },



    template: await get_template('./assets/js/view/contato/home')
}