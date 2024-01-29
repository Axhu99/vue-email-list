const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = Vue.createApp({
    data: () => ({
        emails: [],
        isLoading: false,

    }),

    created(){
        for(let i = 0; i < 10; i++){
            axios.get(endpoint).then(res =>{
                this.emails.push(res.data.response)
            }).catch(err =>{    
                console.log(err)
            }).then(() =>{
                    this.isLoading = false;
            })
        }

    }
    
});

app.mount('#root')