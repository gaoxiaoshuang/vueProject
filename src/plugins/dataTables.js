import dataTablComponent from '../components/common/dataTable.vue';
const dataTablePlugins = {
    install(Vue, options) {
        Vue.component('dataTable', dataTablComponent)
    }
}
export default dataTablePlugins
