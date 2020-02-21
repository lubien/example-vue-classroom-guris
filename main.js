document.addEventListener('DOMContentLoaded', () => {
    // const app = new Vue({
    //     el: '#app',
        
    //     data() {
    //         return {
    //             message: 'Hello Vue ficou muito grande',
    //             myTitle: 'Voce passou o mouse ali',
    //             className: 'spn spn-red',
    //             href: 'http://example.org',
    //             role: 'admin',
    //             tasks: [
    //                 { title: 'Learn JavaScript' },
    //                 { title: 'Learn Vue' },
    //                 { title: 'Build something awesome' }
    //             ]
    //         }
    //     },

    //     methods: {
    //         revertMessage() {
    //             this.message = this.message.split('').reverse().join('')
    //         },

    //         atMostChars(str, size) {
    //             return str.slice(0, size)
    //         }
    //     }
    // })

    const form = new Vue({
        el: '#form',
        
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    email: '',
                    gender: '-',
                    plan: [],
                    sign: 'yes'
                }
            }
        },

        computed: {
            isUsernameInvalid() {
                if (this.form.username.length > 4 && this.form.username.length < 21) {
                    return false
                }

                return 'Usuario deve ter entre 5 e 20 caracteres'
            },

            isPasswordInvalid() {
                if (this.form.password.length > 4 && this.form.password.length < 21) {
                    return false
                }

                return 'Senha deve ter entre 5 e 20 caracteres'
            }
        },

        methods: {
        }
    })
})