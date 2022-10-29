var mainApp = Vue.createApp ({
    //data is a method
    //return is a object
    //content between return object is called property 
    data(){

        return {
            message: "Welcome to vue JS"
        }
    }
})
mainApp.mount("#app")