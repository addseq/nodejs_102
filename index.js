// FUNCTION - take in input(s), run a fixed block of code
function greetingWithName(name) {
  console.log("Good morning, " + name)
}

// call the function
greetingWithName('Alpha')
greetingWithName('Bravo')
greetingWithName('Charlie')

// a function can take in any number of inputs
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2
}

let x = sumOfTwoNumbers(2, 3)
console.log(x)

let y = sumOfTwoNumbers(sumOfTwoNumbers(2, 3), 1)
console.log(y)
// same thing as sumOfTwoNumbers(5, 1)

function btcToEthConverter(amount, crypto, btcPrice, ethPrice) {
  // crypto - either btc or eth - type of cryptocurrency we are converting from and amount is the associated amount 
  if (crypto == 'btc') {
    return amount * btcPrice / ethPrice
  } else if (crypto == 'eth') {
    return amount * ethPrice / btcPrice
  } else {
    console.log("Error: not btc or eth")
  }
}

// 2 BTC -> ? ETH
console.log(btcToEthConverter(2, "btc", 21217, 1722))
// 1.5 ETH -> ? BTC
console.log(btcToEthConverter(1.5, "eth", 21217, 1722))
// try sol
console.log(btcToEthConverter(1.5, "sol", 21217, 1722))

// ARRAY (list)
// CRUD - CREATE, READ, UPDATE, DELETE

// CREATE
let names = ["Alpha", "Bravo", "Charlie"]
//              0         1        2
let cryptos = ["btc", "eth", "sol", "ada", "doge"]
//              0       1      2      3      4

// READ
console.log(names)
console.log(cryptos)

// read just one element
console.log(names[0])
console.log(cryptos[1])

// read a slice - start (inclusive), end (exclusive)
console.log(names.slice(0, 2))
console.log(cryptos.slice(1, 4))

// UPDATE

// .push() - append element at the end, one element at a time
names.push("Charlie")
console.log(names)

// replace
cryptos[4] = "dot"
console.log(cryptos)

// want to replace "ada" with "link", find index of ada first
console.log(cryptos.indexOf("ada"))
cryptos[cryptos.indexOf("ada")] = "link"
console.log(cryptos)

// DELETE

// .pop() - remove the last element
cryptos.pop()
console.log(cryptos)

// .splice(startIndex) - slice and remove elements from startIndex
cryptos = ["btc", "eth", "sol", "ada", "doge"]

console.log(cryptos.splice(3))
console.log(cryptos)

// .splice(startIndex, deleteCount)
cryptos = ["btc", "eth", "sol", "ada", "doge"]

console.log(cryptos.splice(2, 2))
console.log(cryptos)

// .splice(startIndex, deleteCount, newItem1, newItem2, ...)
cryptos = ["btc", "eth", "sol", "ada", "doge"]

console.log(cryptos.splice(2, 2, "link", "dot", "etc"))
console.log(cryptos)

// OBJECTS Data Type { "key": value }
// CRUD - CREATE, READ, UPDATE, DELETE

// CREATE
let satoshiNakamoto = {
  "firstName": "Satoshi",
  "lastName": "Nakamoto",
  "age": 50,
  "gender": "unknown",
  "hobbies": ["coding", "hiding"],
  "address": {
    "city": "Tokyo",
    "country": "Japan"
  }
}

console.log(satoshiNakamoto)

// READ
console.log(satoshiNakamoto.firstName) // case sensitive
console.log(satoshiNakamoto["lastName"])
console.log(satoshiNakamoto.address.country)
console.log(satoshiNakamoto.hobbies[1])

// UPDATE
satoshiNakamoto.btcAmount = 50
// btcAmount doesn't exist, it will be added
satoshiNakamoto.age = 30
// age already exists, it will be edited in place
console.log(satoshiNakamoto)

// DELETE
delete satoshiNakamoto.age
console.log(satoshiNakamoto)

// CLASS - Template for data and functions
// CRUD - CREATE, READ, UPDATE, DELETE

// constructor is a special function that will be called at class creation

class NFT {
  constructor(name, symbol, royalty, creator) {
    this.name = name;
    this.symbol = symbol;
    this.royalty = royalty;
    this.creator = creator;
    this.tokens = [];
    this.currentTokenId = 0;
  }

  mint(metadata) {
    this.tokens.push(metadata);
    this.currentTokenId++;  // increment by 1
  }
}

let bayc = new NFT("Bored Ape Yacht Club", "BAYC", "0.07", "Lucina")

console.log(bayc.name)
console.log(bayc.symbol)

bayc.mint("A yellow Ape holding a hammer")
console.log(bayc.tokens)
console.log(bayc.currentTokenId)

bayc.mint("A brown Ape holding a banana")
console.log(bayc.tokens)
console.log(bayc.currentTokenId)
