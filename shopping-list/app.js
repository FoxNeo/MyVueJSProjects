const standard = '';
var app = new Vue({
    el: '#shopping-list',
    data: {
        header: 'Add items to your shopping list',
        newUtil: standard,
        state: 'default',
        utils: [

        ]
    },
    methods: {
        saveItem: function () {
            this.utils.push(this.newUtil);
            this.newUtil = standard;
        },
        changeState: function (newState) {
            this.state = newState;
            this.newState = '';
        }
    },
});