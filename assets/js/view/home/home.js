import get_template from "../../components/get_template.js";

export default {
    data: function() {
        return {
            isScrolled: false,
            scrollY: 0,
            hero: {
                discount: 79,
                price: '10,09',
                features: [
                    'Foco em Resultados',
                    'Presença Online Forte',
                    'Conexão com o Público',
                    'Confiança e Credibilidade'
                ]
            },

            abaAtiva: 'WebSite',
            abas: ['WebSite', 'Lojas Online', 'Portais'],
            //antigo

            title: "home",
            activeIndex: 1, //Creative Lab desktop (já começa ativo no segundo)
            activeMobile: null, // mobile

            services: [
                "Websites",
                "Aplicações",
                "Hospedagem",
                "Loja Virtual",
                "Logotipo",
                "Portfólio",
                "Cartões",
                "Folder",
                "Marketing ",
                "Video Marketing",
                "Consultoria de TI",
            ],
            index: 0, // índice da palavra atual
            charIndex: 1, // começa com a primeira letra
            deleting: false, // flag para apagar
            displayedText: "", // texto que aparece no slider
            blink: true, // controle do cursor piscante

            menuAberto: false,
            tecnologiasList: [{
                nome: "Vue.js",
                icone: "fab fa-vuejs"
            }, {
                nome: "React",
                icone: "fab fa-react"
            }, {
                nome: "Node.js",
                icone: "fab fa-node-js"
            }, {
                nome: "JavaScript",
                icone: "fab fa-js"
            }, {
                nome: "HTML5",
                icone: "fab fa-html5"
            }, {
                nome: "CSS3",
                icone: "fab fa-css3-alt"
            }, {
                nome: "Python",
                icone: "fab fa-python"
            }, {
                nome: "SQL DB",
                icone: "fas fa-database"
            }],
            depoimentos: [{
                nome: "Carlos Silva",
                cargo: "CEO da TecnoAngola",
                texto: "A CyberDev superou todas as expectativas. Nosso novo e-commerce carrega instantaneamente e o design futurista converteu muito mais clientes.",
                foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"
            }, {
                nome: "Amanda Costa",
                cargo: "Diretora de Marketing - Nexus",
                texto: "Excelente suporte e arquitetura impecável. A segurança do nosso portal corporativo foi elevada a outro nível após o desenvolvimento deles.",
                foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150"
            }, {
                nome: "Ricardo Santos",
                cargo: "Fundador da Startup Vanguarda",
                texto: "Sistema 100% responsivo e limpo. A entrega foi antes do prazo e a interface cibernética encaixou perfeitamente com a proposta da nossa marca.",
                foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150"
            }],


            faqs: [{
                pergunta: "O que a JLsystem faz exatamente?",
                resposta: "Nós transformamos ideias em soluções digitais completas — desde websites institucionais e lojas online até sistemas personalizados. Nosso foco é unir design, tecnologia e estratégia para gerar resultados reais para sua marca",
                aberto: false
            }, {
                pergunta: "Preciso já ter um projeto pronto para contratar?",
                resposta: " Não! Você pode chegar apenas com a ideia ou até mesmo com um rascunho. Nossa equipe ajuda a estruturar, planejar e desenvolver tudo do zero.",
                aberto: false
            }, {
                pergunta: "Preciso pagar tudo de uma vez?",
                resposta: "Não necessariamente. Trabalhamos com condições flexíveis, podendo parcelar de acordo com o tipo de serviço contratado.",
                aberto: false
            }, {
                pergunta: "Qual é o prazo médio de entrega ?",
                resposta: "O prazo varia de acordo ao Projecto. Costumam ser entregues entre 1 a 15 dias, dependendo do tipo de projeto",
                aberto: false
            }, {
                pergunta: " A JLsystem só faz sites ou também outros serviços digitais?",
                resposta: "Além do desenvolvimento web, oferecemos serviços de marketing digital, otimização para mecanismos de busca (SEO), gestão de redes sociais e identidade visual completa para empresas.",
                aberto: false
            }, {
                pergunta: "Como posso solicitar um orçamento?",
                resposta: "Basta entrar em contato pelo nosso site, WhatsApp ou e-mail. Nossa equipe vai analisar a sua necessidade e enviar uma proposta personalizada.",
                aberto: false
            }]
        };
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
        }
    },

    methods: {
        // Atualiza o estado scrollY com a posição atual da janela
        handleScroll() {
            this.scrollY = window.scrollY;
        },

        toggleFaq(index) {
            this.faqs[index].aberto = !this.faqs[index].aberto;
            // Fecha os outros FAQs quando abre um novo
            this.faqs.forEach((item, i) => {
                if (i !== index) item.aberto = false;
            });
        },
        aproveitarOferta() {
            alert(`🛒 Plano adicionado ao carrinho!`);
        },

        typeEffect() {
            const currentText = this.services[this.index];

            if (!this.deleting) {
                // escrevendo
                this.displayedText = currentText.substring(0, this.charIndex);
                this.charIndex++;
                if (this.charIndex > currentText.length) {
                    this.deleting = true;
                    setTimeout(this.typeEffect, 1500); // pausa antes de apagar
                    return;
                }
            } else {
                // apagando, mas nunca a primeira letra
                this.displayedText = currentText.substring(0, this.charIndex);
                this.charIndex--;
                if (this.charIndex === 1) {
                    this.deleting = false;
                    this.index = (this.index + 1) % this.services.length;
                }
            }

            const speed = this.deleting ? 70 : Math.random() * (150 - 80) + 80;
            setTimeout(this.typeEffect, speed);
        },

        activate(index) {
            this.activeIndex = index;
        },
        toggleMob(index) {
            this.activeMobile =
                this.activeMobile === index ? null : index;
        },


    },

    async mounted() {
        // inicia mostrando a primeira letra
        this.displayedText = this.services[0][0];
        // Adiciona o ouvinte de evento quando a instância do Vue for montada
        window.addEventListener('scroll', this.handleScroll);
        // cursor piscando
        setInterval(() => {
            this.blink = !this.blink;
        }, 500);

        // começa o efeito de digitação
        this.typeEffect();

        // Inicializa o PureCounter
        new PureCounter();

        new Swiper(this.$refs.swiperContainer, {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 80
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 80
                }
            }
        });


        this.$nextTick(() => {
            new Swiper(".techSwiper", {
                slidesPerView: 2,
                spaceBetween: 15,
                loop: true,
                freeMode: true,
                speed: 4000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });

            new Swiper(".testimonialSwiper", {
                slidesPerView: 1,
                spaceBetween: 25,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        });



        AOS.init({
            duration: 1000,
        });
    },


    beforeDestroy() {
        // Remove o ouvinte ao destruir o componente (boa prática de memória)
        window.removeEventListener('scroll', this.handleScroll);
    },

    template: await get_template("./assets/js/view/home/home"),
};