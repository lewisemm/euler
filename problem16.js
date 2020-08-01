function problem16() {
  let prod = BigInt(Math.pow(2, 1000))
  let sum = 0n, step = 10n

  while (prod > 0) {
    sum += prod % step
    prod = prod / step
  }
  return sum
}

const startTime = Date.now()
const number = problem16()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  1366n
// Running time (s): 0