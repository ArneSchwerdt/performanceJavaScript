var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var arr = []

for(var i = 0; i < 10000000; i++) {
	arr[i] = i
}


var toString = function(arr) {
	var strArr = []
	for(var i = 0; i < 10000000; i++) {
		strArr[i] = arr[i].toString()
	}
}

var toPrecision = function(arr) {
	var strArr = []
	for(var i = 0; i < 10000000; i++) {
		strArr[i] = arr[i].toPrecision()
	}
}

var newString = function(arr) {
	var strArr = []
	for(var i = 0; i < 10000000; i++) {
		strArr[i] = new String(arr[i])
	}
}

var concatenation = function(arr) {
	var strArr = []
	for(var i = 0; i < 10000000; i++) {
		strArr[i] = "" + arr[i]
	}
}

suite
.add('ToString', () => toString(arr))
.add('ToPrecision', () => toPrecision(arr))
.add('NewString', () => newString(arr))
.add('Concatenation', () => concatenation(arr))
.on('cycle', function(event) {
    console.log(String(event.target));
})
.run()
