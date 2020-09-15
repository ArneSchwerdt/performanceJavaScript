var Benchmark = require('benchmark')    
var suite = new Benchmark.Suite    
    
var arr = []
var objs = []

for(var i = 0; i < 1000000; i++) {    
	arr[i] = i
	objs[i] = { item: i }
} 

var readArr = function(array) {
	for(var i = 0; i < 1000000; i++) {
		var a = array[i]	
	}
}

var readObjs = function(objs) {
	for(var i = 0; i < 1000000; i++) {
		var a = objs[i].item
	}
}

suite 
.add('ReadArray', () => readArr(arr))
.add('ReadObjectItems', () => readObjs(objs))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
