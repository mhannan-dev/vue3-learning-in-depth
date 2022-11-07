var mainApp = Vue.createApp ({
    data(){
        return {
            name: ""
        }
    },
    methods:{
        handleKeyUp(event){
            // console.log(event);
            this.name = event.target.value
        },
        handleFormSubmit(event){
            event.preventDefault;
        }
    }
})
mainApp.mount("#app")