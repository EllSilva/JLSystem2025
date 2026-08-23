import get_template from '../../components/get_template.js'

export default {
    data: function() {
        return {
            title: "Contato",
            activeTab: 0
        }
    },
    template: await get_template('./assets/js/view/galeria/home')
}