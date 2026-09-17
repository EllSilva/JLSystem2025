import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import page_menu from './components/menu/home.js'
Vue.component('p-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('p-footer', page_footer)

import page_portfolio from './components/portfolio/home.js'
Vue.component('p-portfolio', page_portfolio)









import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_servicos_hospedagem from './view/servicos/hospedagem.js'
Vue.component('p-servicos_hospedagem', page_servicos_hospedagem)

import page_servicos_dominio from './view/servicos/dominio.js'
Vue.component('p-servicos_dominio', page_servicos_dominio)

import page_servicos_website from './view/site_app/website.js'
Vue.component('p-servicos_website', page_servicos_website)
import page_servicos_app from './view/site_app/app.js'
Vue.component('p-servicos_app', page_servicos_app)


import page_servicos_loja_virtual from './view/site_app/loja.js'
Vue.component('p-servicos_loja_virtual', page_servicos_loja_virtual)

import page_material_publicitario from './view/servicos/designer-grafico.js'
Vue.component('p-designer-grafico', page_material_publicitario)


import page_identidade_visual from './view/servicos/identidade-visual.js'
Vue.component('p-identidade-visual', page_identidade_visual)

import page_papelaria from './view/servicos/papelaria.js'
Vue.component('p-papelaria', page_papelaria)
import page_portifolio from './view/servicos/portifolio.js'
Vue.component('p-portifolio', page_portifolio)

import page_assinatura from './view/servicos/assinatura.js'
Vue.component('p-assinatura', page_assinatura)

import page_email from './view/servicos/email.js'
Vue.component('p-email', page_email)

import page_email_marketig from './view/marketing/email_marketig.js'
Vue.component('p-email_marketig', page_email_marketig)

import page_gestao_redes_social from './view/marketing/gestao_redes_social.js'
Vue.component('p-gestao_redes_social', page_gestao_redes_social)

import page_link_patrocinado from './view/marketing/link_patrocinado.js'
Vue.component('p-link_patrocinado', page_link_patrocinado)



import page_servicos from './view/servicos/home.js'
Vue.component('p-servicos', page_servicos)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_galeria from './view/galeria/home.js'
Vue.component('p-galeria', page_galeria)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)







Vue.use(Router)

page_servicos

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/website', component: { template: '<p-servicos_website></p-servicos_website>' } },
    { path: '/email-profissional', component: { template: '<p-email></p-email>' } },
    { path: '/identidade-visual', component: { template: '<p-identidade-visual></p-identidade-visual>' } },


    { path: '/dominios', component: { template: '<p-servicos_dominio></p-servicos_dominio>' } },
    { path: '/hospedagem-de-sites', component: { template: '<p-servicos_hospedagem></p-servicos_hospedagem>' } },

    { path: '/app-web', component: { template: '<p-servicos_app></p-servicos_app>' } },
    { path: '/criacao-de-loja-virtual', component: { template: '<p-servicos_loja_virtual></p-servicos_loja_virtual>' } },

    { path: '/designer-grafico', component: { template: '<p-designer-grafico></p-designer-grafico>' } },
    { path: '/criacao-de-cartoes', component: { template: '<p-cartoes></p-cartoes>' } },
    { path: '/papelaria', component: { template: '<p-papelaria></p-papelaria>' } },
    { path: '/portfolio', component: { template: '<p-portifolio></p-portifolio>' } },

    { path: '/assinatura-de-email', component: { template: '<p-assinatura></p-assinatura>' } },
    { path: '/gestao-de-redes-sociais', component: { template: '<p-gestao_redes_social></p-gestao_redes_social>' } },
    { path: '/link-patrocinado', component: { template: '<p-link_patrocinado></p-link_patrocinado>' } },

    { path: '/email-marketing', component: { template: '<p-email_marketig></p-email_marketig>' } },

    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/projectos', component: { template: '<p-galeria></p-galeria>' } },

    { path: '/contato', component: { template: '<p-contato></p-contato>' } },

]


const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;
(async() => {})()