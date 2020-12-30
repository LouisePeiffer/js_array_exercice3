let fruits = ['pomme', 'cerise', 'fraise']
console.log(fruits);
fruits.push('Louiseeeee')
console.log(fruits);
fruits.splice(2, 1, "Bounce")
console.log(fruits);

// Autres méthodes
fruits[0]='test'
console.log(fruits);

fruits[fruits.indexOf('fraise')] = 'test2'
console.log(fruits);

