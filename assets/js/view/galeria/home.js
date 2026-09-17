import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            currentFilter: 'Todos',
            categories: ['Todos', 'Websites', 'Designer', 'Portifolio'],
            projects: [{
                id: 1,
                title: 'Hyperion Portal',
                category: 'Websites',
                description: 'Interface web descentralizada com renderização 3D em tempo real.',
                image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
                link: 'https://google.com'
            }, {
                id: 2,
                title: 'Identidade Cyberpunk',
                category: 'Designer',
                description: 'Conjunto de conceitos visuais e assets de design futuristas.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
                    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
                    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1000&q=80'
                ]
            }, {
                id: 3,
                title: 'Portfólio Pessoal VR',
                category: 'Portifolio',
                description: 'Showcase de projetos interativos em ambiente 3D imersivo.',
                image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
                    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80'
                ]
            }, {
                id: 4,
                title: 'Aether HUD Website',
                category: 'Websites',
                description: 'Painel de controle futurista acessível diretamente pelo navegador.',
                image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80',
                link: 'https://github.com'
            }, {
                id: 5,
                title: 'UI Kit UI/UX Futurista',
                category: 'Designer',
                description: 'Interface e prototipação de componentes em Neon e Glassmorphism.',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
                    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80'
                ]
            }, {
                id: 6,
                title: 'Coleção de Obras Synth',
                category: 'Portifolio',
                description: 'Coleção de artes digitais generativas e renderizações.',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
                gallery: [
                    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80'
                ]
            }]

        }
    },
    computed: {
        filteredProjects() {
            if (this.currentFilter === 'Todos') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.currentFilter);
        }
    },
    methods: {
        handleProjectClick(project) {
            if (project.category === 'Websites') {
                if (project.link) {
                    window.open(project.link, '_blank');
                }
            } else {
                this.openGLightbox(project);
            }
        },
        openGLightbox(project) {
            const elements = project.gallery.map(imgUrl => ({
                href: imgUrl,
                type: 'image',
                title: project.title,
                description: project.description
            }));

            const lightbox = GLightbox({
                elements: elements,
                touchNavigation: true,
                keyboardNavigation: true,
                loop: true,
                zoomable: true,
                openEffect: 'zoom',
                closeEffect: 'zoom'
            });

            lightbox.open();
        }
    },
    template: await get_template('./assets/js/view/galeria/home')
}