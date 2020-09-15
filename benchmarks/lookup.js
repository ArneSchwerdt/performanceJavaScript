var Benchmark = require('benchmark')    
var suite = new Benchmark.Suite    
    
var arr = []
var obj = {}

for(var i = 0; i < 1000000; i++) {    
	arr[i] = i
	obj[i] = i
} 

var lookup = function(obj) {
	var result = new Array(1000000)

	for(var i = 0; i < 1000000; i++) {
		result[i] = obj[i]
	}
	return result
}

suite 
.add('ArrayLookup', () => lookup(arr)) 
.add('ObjectLookup', () => lookup(obj)) 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
