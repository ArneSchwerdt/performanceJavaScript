# Performance Compare JavaScript
## Scenario
Thinkpad L580
Intel CORE i7 8th Gen
Node.js: v14.10.1
Benchmark.js: 2.1.4 
## Loops
```
forEach x 87.99 ops/sec ±0.43% (75 runs sampled)
forOf x 1,135 ops/sec ±0.62% (93 runs sampled)
forI x 1,344 ops/sec ±0.44% (96 runs sampled)
while x 1,340 ops/sec ±0.40% (95 runs sampled)
```
## Write Array
```
WriteByIndex x 4.00 ops/sec ±4.69% (14 runs sampled)
WriteByIndexWithPredefinedArray x 21.28 ops/sec ±0.55% (39 runs sampled)
WriteByIndexWithPredefinedArrayReverse x 21.23 ops/sec ±0.67% (39 runs sampled)
WriteByPush x 4.01 ops/sec ±2.05% (14 runs sampled)
```
## String to Number
```
ParseInt x 3.09 ops/sec ±25.28% (12 runs sampled)
ParseFloat x 3.51 ops/sec ±3.25% (13 runs sampled)
NewNumber x 0.56 ops/sec ±23.52% (6 runs sampled)
```
## Number to String
```
ToString x 0.80 ops/sec ±10.31% (6 runs sampled)
ToPrecision x 0.83 ops/sec ±5.99% (6 runs sampled)
newString x 0.37 ops/sec ±7.69% (5 runs sampled)
Concatenation x 0.77 ops/sec ±13.10% (6 runs sampled)
```
## Lookup Table
```
ArrayLookup x 193 ops/sec ±1.29% (82 runs sampled)
ObjectLookup x 197 ops/sec ±0.71% (77 runs sampled)
```
## Read a Number Array vs. Read Items of an Array of Objects (OOP Tradeoff)
```
ReadArray x 1,816 ops/sec ±0.47% (96 runs sampled)
ReadObjectItems x 414 ops/sec ±0.44% (89 runs sampled)
```
