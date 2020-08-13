Vue.component('MyForm', {
    template: 
        '<form>' +  
            '<input type="text" v-model="text">' +
            '<input type="submit" @click="submit">' +
        '</form>',
    props: ['submit', 'text']
})

let vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!',
        text: '',
        counter: 0,
        itsCool: false
    },
    methods: {
        submit() {
            alert('submit')
        }
    }
})

vm.$watch('text', (newValue, oldValue) => {
    alert('text changed:')
})