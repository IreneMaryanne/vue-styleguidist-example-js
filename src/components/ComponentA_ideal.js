var ComponentA = {
    props: {
        color: {
          type: String,
          default: "black"
        }
    },
    methods: {
        /** @public */
        method1: function(e){
            console.log("This is method1");
        }
    },
    template: `<div :style="{color: color}">This is componentA</div>`
}

if (typeof module == 'undefined') { //browser mode 
    Vue.component('ComponentA', ComponentA);
    module = {}
}
module.exports = ComponentA; 
