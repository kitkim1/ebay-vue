/*
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
*/

var HelloVueComponent = {
	props: ['parentNum', 'eventyn'],
	template: '<p>hello vue {{ message }}</p>',
	created: function () {
		if (!isNaN(this.parentNum)) {
			this.message = '- num : ' + this.parentNum;
		}

		if (this.eventyn) {
			//https://kr.vuejs.org/v2/guide/components.html#sync-%EC%88%98%EC%8B%9D%EC%96%B4
			this.message = this.parentNum + '- 변경 (num +1)'
			this.$emit('update:parent-num', this.parentNum + 1);
		}
	},
	data () {
		return {
			message: ''
		};
	}
};

var app = new Vue({
	el: '#answer',
	components: {
		'hello-vue-component': HelloVueComponent
	},
	data: {
		login: true,
		num: 10
	},
	methods: {
		openAlert () {
			alert('1번! 경고임');
		}
	}
});