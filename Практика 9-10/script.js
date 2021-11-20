for (let i = 0; i < 7; i++)
{
	n = '#'
	for (let j = 0; j < i; j++)
	{
		n += '#'
	}
	console.log(n)
}

console.log(' ')
console.log(' ')

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

console.log(' ')
console.log(' ')

d = "# # # # "
b = " # # # #"
for (let i = 1; i <= 8; i++)
{
	if (i % 2 == 1)
		console.log(d)
	else
		console.log(b)
}

console.log(' ')
console.log(' ')

console.log("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n")

console.log(' ')
console.log(' ')

a = 7
b = 9
console.log("Сравним " + a + " и " + b)
c = Math.min(a, b)
console.log(c)

console.log(' ')
console.log(' ')

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

console.log(' ')
console.log(' ')

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

console.log(' ')
console.log(' ')

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