// array spread
const places = ['rwanda', 'kapmala', 'toronto']
console.log([...places, 'kikoni'])

// object spread
// relies on babel-plugin-transform-object-rest-spread --- install setInterval(function () {

const user = {
  name: 'Jan'
  ,year: 22
  ,table: true
}

console.log({id: 2111, ...user, name: 'KK', year: 1})
