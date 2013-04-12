var Feedback = require('./Feedback');

var foo = new Feedback({
	uid : 'itemuid', 
	arg : 'itemarg', 
	title : 'Some Item Title', 
	subtitle : 'Some item subtitle', 
	icon : 'icon.png', 
	valid : 'yes', 
	autocomplete : 'autocomplete'
});

console.log(foo.toString());

var bar = new Feedback([{
	uid : 'itemuid', 
	arg : 'itemarg', 
	title : 'Some Item Title', 
	subtitle : 'Some item subtitle', 
	icon :  {
		value : 'icon.png', 
		type : 'filetype'
	},
	valid : 'yes', 
	autocomplete : 'autocomplete',
	type : 'file'
}, {
	uid : 'itemuid2', 
	arg : 'itemarg2', 
	title : 'Some Item Title2', 
	subtitle : 'Some item subtitle2', 
	autocomplete : 'autocomplete',
	type : 'file'
}]);

bar.addItem({
	uid : 'itemuid3', 
	arg : 'itemarg3', 
	title : 'Some Item Title3', 
	subtitle : 'Some item subtitle3', 
	autocomplete : 'autocomplete',
	type : 'file'
});

console.log(bar.toString());