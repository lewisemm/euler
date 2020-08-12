function* fibonacci() {
  let temp = BigInt(0), term1 = BigInt(0), term2 = BigInt(1)
  if (term1 === 0 && term2 === 1) {
    yield term2
  }
  while (true) {
    temp = term1 + term2
    term1 = term2
    term2 = temp
    yield term2
  }
}

function problem25(length) {
  const generator = fibonacci()
  let val = BigInt(0), counter = 1
  do {
    val = generator.next().value
    counter += 1
  }
  while(`${val}`.length < length)
  return counter
}


const startTime = Date.now()
const number = problem25(1000)
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)