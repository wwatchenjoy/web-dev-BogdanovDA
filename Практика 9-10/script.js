//Номер 1
for (let i = 0; i < 7; i++)
{
	n = '#'
	for (let j = 0; j < i; j++)
	{
		n += '#'
	}
	console.log(n)
}


//Номер 2
for (let i = 1; i < 100; i++)
{
	if (i % 3 == 0 && i % 5 != 0)
		console.log("Fizz")
	else if (i % 5 ==0 && i % 3 != 0)
		console.log("Bizz")
	else if (i % 3 == 0 && i % 5 == 0)
		console.log("FizzBizz")
	else
		console.log(i)
}


//Номер 2
d = "# # # # "
b = " # # # #"
for (let i = 1; i <= 8; i++)
{
	if (i % 2 == 1)
		console.log(d)
	else
		console.log(b)
}



//Номер 3
console.log("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n")



//Номер 4
a = 7
b = 9
console.log("Сравним " + a + " и " + b)
c = Math.min(a, b)
console.log(c)



//Номер 5
s = "BnkjhBiuhjujijhBufBd"
function countBs(line) {
	counter = 0
	for (let i = 0; i < line.length; i++)
	{
		if (line.charAt(i) == "B")
			counter++
	}
	console.log(counter)
}
countBs(s)



//Номер 6
s = "BnkjhBiuhjujijhBufBd"
b = "B"
function countBs2(line, symbol) {
	counter = 0
	for (let i = 0; i < line.length; i++)
	{
		if (line.charAt(i) == symbol)
			counter++
	}
	console.log(counter)
}
countBs2(s, b)



//Номер 7
l = 10
r = 5
t = -1
var n = []
function range(l, r, n, t) {
	if (t == undefined)
	{
		j = 0
		i = l
		for (let i = l; i <= r; i++)
		{
			n[j] = i
			j++
		}
	}
	else
	{
		if (t < 0)
		{
			j = 0
			for (let i = l; i >= r; i+=t)
			{
				n[j] = i
				j++
			}
		}
		else
		{
			j = 0
			for (let i = l; i <= r; i+=t)
			{
				n[j] = i
				j++
			}
		}
	}
}
range(l, r, n, t)
function sum (n){
   var s = 0
   for (i = 0; i < n.length; i++){
      s += n[i]
   }
   return s
}
for (let i = 0; i < n.length; i++)
{
	console.log(n[i])
}
console.log(sum(n))

console.log(' ')
console.log(' ')

var mas = []
for (let i = 0; i < 5; i++)
{
	mas[i] = i + 1
}
function reverseArray (mas)
{
	var mas2 = []
	for (let i = 0; i < mas.length; i++)
	{
		mas2[i] = mas[mas.length - i - 1]
	}
	return mas2
}
mas = reverseArray(mas)
for (let i = 0; i < 5; i++)
{
	console.log(mas[i])
}



function reverseArrayInPlace (mas)
{
	j = 0
	for (let i = mas.length - 1; i >= 0; i-=1)
	{
		mas[j] = mas[i]
		j++
	}
}



reverseArrayInPlace(mas)
for (let i = 0; i < 5; i++)
{
	console.log(mas[i])
}



//Номер 8
function arrayToList(arr) {
	return arr.reduceRight((rest, value) => ({value, rest}), null);
}
	
console.log(arrayToList ([1, 2, 3]))
	
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
	array.push(node.value);
	}
	return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list) {
	return {value, rest: list};
}

console.log(prepend(1, prepend(2, null)));

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 1));


//Номер 9
function deepEqual(a, b) {
	if (a === b)
		return true;
	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object") 
		return false;
	let keysA = Object.keys(a), keysB = Object.keys(b);
	if (keysA.length != keysB.length) 
		return false;
	for (let key of keysA) {
	  	if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
			return false;
	}
	return true;
  }
  
let asobj = {here: {is: "an"}, object: 2};
console.log(deepEqual(asobj, asobj));


//Номер 10
function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
	  	return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
  }

console.log(flatten([[1, 2, 3], [4, 5]]));


//Номер 11
let ancestry = ([
	{b: 1832, d: 1905},
	{b: 1876, d: 1956},
	{b: 1683, d: 1724},
	{b: 1714, d: 1748},
	{b: 1907, d: 1997},
	{b: 1761, d: 1833},
	{b: 1535, d: 1582},
	{b: 1918, d: 2012},
	{b: 1877, d: 1968},
	{b: 1696, d: 1724},
	{b: 1602, d: 1642}]);


function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
	return byName[person.mother] != null;
}).map(function(person) {
	return person.b - byName[person.mother].b;
});
console.log(average(differences)); 


//Номер 12
function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
	var groups = {};
	array.forEach(function(element) {
		var groupName = groupOf(element);
		if (groupName in groups)
		groups[groupName].push(element);
		else
		groups[groupName] = [element];
	});
	return groups;
}

var byCentury = groupBy(ancestry, function(person) {
	return Math.ceil(person.d / 100);
});

for (var century in byCentury) {
	var ages = byCentury[century].map(function(person) {
		return person.d - person.b;
	});
	console.log(century + ": " + average(ages));
}


//Номер 13
function every(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (!predicate(array[i]))
		return false;
	}
	return true;
}

function some(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (predicate(array[i]))
		return true;
	}
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));