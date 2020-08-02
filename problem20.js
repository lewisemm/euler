function factorial(number) {
  let ans = 1n
  for (let i = number; i > 0; i--) {
    ans *= BigInt(i)
  }
  return ans
}

function problem20(number) {
  let sum = 0
  let fact = factorial(number)
  let strFact = `${fact}`
  for (let digit of strFact) {
    sum += parseInt(digit)
  }
  return sum
}

const startTime = Date.now()
const number = problem20(100)
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  648
// Running time (s): 0.001
