const fs = require('fs')

function alphabetPosition() {
  let charCode = 65, positions = {}
  for (let i = 1; i <= 26; i++, charCode++) {
    positions[String.fromCharCode(charCode)] = i
  }
  return positions
}

function getNames(filename='p022_names.txt') {
  const encoding = 'utf-8'
  return new Promise((res, rej) => {
    fs.readFile(filename, encoding, function(err, data) {
      if (err) {
        rej(err)
      }
      res(data)
    })
  })
}

function nameScore(name) {
  const positions = alphabetPosition()
  let sum = 0
  for (let letter of name) {
    sum += positions[letter] || 0
  }
  return sum
}

async function problem22() {
  let sum = 0, total = 0
  let names = await getNames()

  names = names.split(',')
  let length = names.length
  names.sort()

  for (let i = 0; i < length; i++) {
    sum = nameScore(names[i])
    total += (sum * (i+1))
  }
  console.log('total: ', total)
  return total
}

const startTime = Date.now()
const number = problem22()
const endTime = Date.now()
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)