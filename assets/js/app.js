import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)

import page_form_contact from './components/form/home.js'
Vue.component('c-form_contact', page_form_contact)

import page_slider_principal from './components/jls/slider_principal.js'
Vue.component('c-slider_principal', page_slider_principal)

import page_planos from './components/jls/planos.js'
Vue.component('c-planos', page_planos)

import page_planos_site from './components/jls/planos/website.js'
Vue.component('c-planos_site', page_planos_site)

import page_planos_hosp from './components/jls/planos/hospedagem.js'
Vue.component('c-planos_hosp', page_planos_hosp)

import page_planos_email from './components/jls/planos/email.js'
Vue.component('c-planos_email', page_planos_email)

import page_planos_domin from './components/jls/planos/dominio.js'
Vue.component('c-planos_domin', page_planos_domin)

import page_cliente from './components/jls/cliente.js'
Vue.component('c-cliente', page_cliente)



import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_servicos_hospedagem from './view/servicos/hospedagem.js'
Vue.component('p-servicos_hospedagem', page_servicos_hospedagem)

import page_servicos_dominio from './view/servicos/dominio.js'
Vue.component('p-servicos_dominio', page_servicos_dominio)

import page_servicos_website from './view/site_app/website.js'
Vue.component('p-servicos_website', page_servicos_website)


import page_servicos_loja_virtual from './view/site_app/loja.js'
Vue.component('p-servicos_loja_virtual', page_servicos_loja_virtual)

import page_logotipo from './view/servicos/logotipo.js'
Vue.component('p-logotipo', page_logotipo)

import page_cartoes from './view/servicos/cartoes.js'
Vue.component('p-cartoes', page_cartoes)

import page_flyers from './view/servicos/flyers.js'
Vue.component('p-flyers', page_flyers)

import page_papelaria from './view/servicos/papelaria.js'
Vue.component('p-papelaria', page_papelaria)

import page_assinatura from './view/servicos/assinatura.js'
Vue.component('p-assinatura', page_assinatura)

import page_email from './view/servicos/email.js'
Vue.component('p-email', page_email)

import page_email_marketig from './view/marketing/email_marketig.js'
Vue.component('p-email_marketig', page_email_marketig)

import page_gestao_redes_social from './view/marketing/gestao_redes_social.js'
Vue.component('p-gestao_redes_social', page_gestao_redes_social)

import page_identidade from './view/servicos/identidade.js'
Vue.component('p-identidade', page_identidade)

 


import page_servicos from './view/servicos/home.js'
Vue.component('p-servicos', page_servicos)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_galeria from './view/galeria/home.js'
Vue.component('p-galeria', page_galeria)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)
 

Vue.use(Router)

 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/dominios', component: { template: '<p-servicos_dominio></p-servicos_dominio>' } },
    { path: '/hospedagem', component: { template: '<p-servicos_hospedagem></p-servicos_hospedagem>' } },
   
  
    { path: '/criacao-de-sites', component: { template: '<p-servicos_website></p-servicos_website>' } },
    { path: '/criacao-de-loja-virtual', component: { template: '<p-servicos_loja_virtual></p-servicos_loja_virtual>' } },
    { path: '/criacao-de-logotipo', component: { template: '<p-logotipo></p-logotipo>' } },
    { path: '/criacao-de-cartoes', component: { template: '<p-cartoes></p-cartoes>' } },
    { path: '/papelaria', component: { template: '<p-papelaria></p-papelaria>' } },
    { path: '/criacao-flyer-folder', component: { template: '<p-flyers></p-flyers>' } },
    { path: '/assinatura-de-email', component: { template: '<p-assinatura></p-assinatura>' } },
    { path: '/email-profissional', component: { template: '<p-email></p-email>' } },
    { path: '/gestao-de-redes-sociais', component: { template: '<p-gestao_redes_social></p-gestao_redes_social>' } },
    { path: '/email-marketing', component: { template: '<p-email_marketig></p-email_marketig>' } },
   
     
    { path: '/criacao-visual', component: { template: '<p-identidade></p-identidade>' } },
     
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/galeria', component: { template: '<p-galeria></p-galeria>' } },

    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
 
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()