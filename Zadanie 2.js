let x = 10;
if ((typeof x == 'number' || 'bigInt') && !(isNaN(x))) {
    console.log(x + '- число')
} else if (typeof x == 'string') {
	console.log(x + '-строка')
} else if (typeof x == 'boolean') {
	console.log(x + '-логический тип')
} else {
	console.log('Тип не определён')
}

let y = 'nyujkiuy';
if ((typeof y == 'number' || 'bigInt') && !(isNaN(y))) {
    console.log(y + '- число')
} else if (typeof y == 'string') {
	console.log(y + '-строка')
} else if (typeof y == 'boolean') {
	console.log(y + '-логический тип')
} else {
	console.log('Тип не определён')
}

let z = true
const typeZ = typeof z;
console.log(typeZ)
if ((typeof z == 'number' || typeof z == 'bigInt') && !(isNaN(z))) {
    console.log(z + '- число')
} else if (typeof z == 'string') {
	console.log(z + '-строка')
} else if (typeof z == 'boolean') {
	console.log(z + '-логический тип')
} else {
	console.log('Тип не определён')
}
