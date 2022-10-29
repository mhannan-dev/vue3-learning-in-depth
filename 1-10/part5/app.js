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
        decremnt(){
            this.count = this.count - 1
        }
    }
})
mainApp.mount("#app")