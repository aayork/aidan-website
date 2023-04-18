var co = new Vue({
    el: '#co',
    data: {
   toastState: "burnt"
    },
     methods: {
        checkToast(){
           this.toastState = "perfect"
        }
    }
})