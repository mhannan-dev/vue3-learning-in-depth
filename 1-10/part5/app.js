var mainApp = Vue.createApp ({
    data(){
        return {
            count: 0
        }
    },
    methods:{
        increment(){
            this.count ++
            // this.count = this.count + 1
        },
        decremnt(amount){
            this.count = this.count - amount
        }
    }
})
mainApp.mount("#app")