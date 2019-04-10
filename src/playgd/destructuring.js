// OBJECT DESTRUCTURING

const details = {
  name: 'Jag'
  ,age: 33
  ,typ: "Male"
}

const { name, age: myAge, year = "222", typ: type ="dlsd" } = details
// console.log(name)
// console.log("AGe", myAge)
// console.log(year)
// console.log(type)
//

const book = {
  title: 'Ego is the Enemy'
  ,author: "Ryan Holiday"
  ,publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)



// ARRAY DESTRUCTURING
const address = ['11 Juniper Str', 'hil', 'Penny', 19912]
const [street, city, state, zip] = address

// console.log(`You are in ${address[1]} and ${address[2]}`)
// console.log(`Your street is ${street} and state is ${state}`)
const [, city2, ,zip2] = address
// console.log(`The city is ${city2}  and zip is ${zip2}`)


const item = ['Coffee (hot)', '$2.00', '$2.55', '$11']

// grab first and third items
const [coffee, , cost, , color = "brown"] = item
console.log(`A medium ${color} ${coffee} costs ${cost}`)
