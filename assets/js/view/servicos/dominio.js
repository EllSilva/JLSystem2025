import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {

            searchQuery: '',
            selectedCategory: 'all',
            sortKey: 'extension',
            sortAsc: true,

            featuredDomains: [{
                name: '.net',
                price: '79,99',
                renewal: 'R$ 119,00',
                icon: ''
            }, {
                name: 'store',
                price: '369,99',
                renewal: 'R$ 399,00',
                icon: ''
            }, {
                name: '.online',
                price: '239,99',
                renewal: 'R$ 269,00',
                icon: 'fas fa-at'
            }, {
                name: '.site',
                price: '199,99',
                renewal: 'R$ 229,00',
                icon: 'fas fa-at'
            }, {
                name: '.tech',
                price: '334,99',
                renewal: 'R$ 364,00',
                icon: ''
            }, {
                name: '.website',
                price: '149,99',
                renewal: 'R$ 179,00',
                icon: 'fas fa-at'
            }, {
                name: '.host',
                price: '619,99',
                renewal: 'R$ 649,00',
                icon: ''
            }, {
                name: '.ong',
                price: '289,99',
                renewal: 'R$ 319,00',
                icon: 'fas fa-globe'
            }],

            benefits: [{
                icon: 'far fa-plus-square',
                title: 'Diversas extensões',
                description: 'Além das extensões populares, a HostMídia traz as novas opções para você escolher a extensão de domínio perfeita para movimentar sua ideia ou negócio.'
            }, {
                icon: 'far fa-share-square',
                title: 'Estacione grátis',
                description: 'Seu site não está pronto e você não quer perder o seu tão valioso domínio? Após o registro a HostMídia estaciona o domínio em nossos servidores gratuitamente!'
            }, {
                icon: 'fas fa-lock',
                title: 'Bloqueio de domínio',
                description: 'Seu domínio transferido sem sua autorização? Na HostMídia não! Com o nosso sistema de Bloqueio, seus domínios internacionais só podem ser transferidos com sua liberação.'
            }, {
                icon: 'far fa-thumbs-up',
                title: '+ 85.000 registros',
                description: 'Isso mesmo, nesses 19 anos de existência, nós já registramos mais de 85 mil domínios e este número não para de crescer, graças aos nossos valores, tradição e confiança.'
            }],

            // Lista expandida com valores numéricos para ordenação precisa
            priceList: [{
                extension: '.com',
                oldPrice: 'R$ 49,99',
                registerPrice: 'R$ 39,99',
                registerNum: 39.99,
                renewalPrice: 'R$ 79,99',
                renewalNum: 79.99,
                transferPrice: 'R$ 79,99 / ano',
                category: 'internacionais'
            }, {
                extension: '.com.br',
                oldPrice: 'R$ 34,99',
                registerPrice: 'R$ 24,99',
                registerNum: 24.99,
                renewalPrice: 'R$ 59,99',
                renewalNum: 59.99,
                transferPrice: 'R$ 59,99 / ano',
                category: 'nacionais'
            }, {
                extension: '.net',
                oldPrice: 'R$ 89,99',
                registerPrice: 'R$ 79,99',
                registerNum: 79.99,
                renewalPrice: 'R$ 99,99',
                renewalNum: 99.99,
                transferPrice: 'R$ 89,99 / ano',
                category: 'internacionais'
            }, {
                extension: '.org',
                oldPrice: 'R$ 99,99',
                registerPrice: 'R$ 89,99',
                registerNum: 89.99,
                renewalPrice: 'R$ 89,99',
                renewalNum: 89.99,
                transferPrice: 'R$ 89,99 / ano',
                category: 'internacionais'
            }, {
                extension: '.org.br',
                oldPrice: 'R$ 49,99',
                registerPrice: 'R$ 39,99',
                registerNum: 39.99,
                renewalPrice: 'R$ 59,99',
                renewalNum: 59.99,
                transferPrice: 'R$ 59,99 / ano',
                category: 'nacionais'
            }, {
                extension: '.tech',
                oldPrice: '',
                registerPrice: 'R$ 334,99',
                registerNum: 334.99,
                renewalPrice: 'R$ 364,00',
                renewalNum: 364.00,
                transferPrice: 'R$ 364,00 / ano',
                category: 'internacionais'
            }, {
                extension: '.site',
                oldPrice: '',
                registerPrice: 'R$ 199,99',
                registerNum: 199.99,
                renewalPrice: 'R$ 229,00',
                renewalNum: 229.00,
                transferPrice: 'R$ 229,00 / ano',
                category: 'internacionais'
            }]

        }

    },

    computed: {
        // Computed Property que gerencia a filtragem e a ordenação em tempo real
        filteredAndSortedList() {
            return this.priceList
                .filter(item => {
                    // Filtro por termo de busca
                    const matchesSearch = item.extension.toLowerCase().includes(this.searchQuery.toLowerCase());

                    // Filtro por categoria
                    const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;

                    return matchesSearch && matchesCategory;
                })
                .sort((a, b) => {
                    // Ordenação dinâmica
                    let modifier = this.sortAsc ? 1 : -1;
                    if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                    if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                    return 0;
                });
        }
    },
    methods: {
        // Alterna a direção da ordenação ou altera a coluna ativa
        setSort(key) {
            if (this.sortKey === key) {
                this.sortAsc = !this.sortAsc;
            } else {
                this.sortKey = key;
                this.sortAsc = true;
            }
        },
        // Retorna a classe do ícone de seta para as colunas ordenáveis
        getSortIcon(key) {
            if (this.sortKey !== key) return 'fa-sort text-muted ms-1';
            return this.sortAsc ? 'fa-sort-up text-primary ms-1' : 'fa-sort-down text-primary ms-1';
        }
    },

    async mounted() {


    },
    template: await get_template('./assets/js/view/servicos/dominio')
}