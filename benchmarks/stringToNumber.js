var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var strArr = []

for(var i = 0; i < 10000000; i++) {
	strArr[i] = i.toString()
}


var parseIntFunc = function(arr) {
	var nums = []
	for(var i = 0; i < 10000000; i++) {
		nums[i] = parseInt(arr[i])
	}
}

var parseFloatFunc = function(arr) {
	var nums = []
	for(var i = 0; i < 10000000; i++) {
		nums[i] = parseFloat(arr[i])
	}
}

var newNumber = function(arr) {
	var nums = []
	for(var i = 0; i < 10000000; i++) {
		nums[i] = new Number(arr[i])
	}
}

suite
.add('ParseInt', () => parseIntFunc(strArr))
.add('ParseFloat', () => parseFloatFunc(strArr))
.add('NewNumber', () => newNumber(strArr))
.on('cycle', function(event) {
    console.log(String(event.target));
})
.run()
