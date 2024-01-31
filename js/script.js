const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = Vue.createApp({
    data: () => ({
        emails: [],
        tot: 10,
    }),
    
    methods:{
        // recupero UNA sola email 
        fetchData(){
            axios.get(endpoint).then(res =>{
                this.emails.push(res.data.response)
            })
        }
    },
    created(){
        // alla creazione della pagina recupero un email TOT volte
        for(i = 0; i < this.tot; i++){
            this.fetchData();
        } 
    }
});

app.mount('#root')   