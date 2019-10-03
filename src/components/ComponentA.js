var ComponentA = {
    props: {

        color: {
          type: String,
          default: "black"
        },
    },
    
    methods: {
        /**
         * Gets called when the user clicks on the button
         *
         * @public
         */
        method1: function(e){
            console.log("This is method1"+e);
        }
    },
    template: `<div :style="{color: color}">This is componentA<div>`
}

module.exports = ComponentA;
