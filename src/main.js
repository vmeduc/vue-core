Vue.component('MyForm', {
    template: 
        '<div>' +
            '<form>' +  
                '<input type="text" v-model="text">' +
                '<input type="submit" @click="submit">' +
            '</form>' +
            '<p>Message: {{ message }}</p>' +
            '<p>Reverse message: {{ reverse }}</p>'+
        '</div>',
    props: ['submit', 'text', 'message', 'reverse']
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
    },
    computed: {
        reverse() {
            return this.message.split('').reverse().join('')
        }
    },
    watch: {

    }
})
