var mainApp = Vue.createApp ({
    //data is a method
    //return is a object
    //content between return object is called property 
    data(){
        return {
            tutorialInfo:{
                name: 'Learning a progressive framework VueJS 3',
                githubLink: 'https://github.com/mhannan-dev/vue3-learning-in-depth',
            }
        }
    }
})
mainApp.mount("#app")