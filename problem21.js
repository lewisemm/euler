function getDivisors(number) {
  let divisors = new Set([1])
  let sqrt = Math.round(Math.sqrt(number))

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      divisors.add(i)
      divisors.add(number / i)
    }
  }
  return divisors
}

function summation(divisors) {
  let sum = 0
  for (let div of divisors) {
    sum += div
  }
  return sum
}

function problem21(number) {
  let divisors, sum = 0
  let divisors2, sum2 = 0
  let amicables = new Set()
  for (let no = 2; no < number; no++) {
    divisors = getDivisors(no)
    sum = summation(divisors)
    divisors2 = getDivisors(sum)
    sum2 = summation(divisors2)
    if (sum2 === no && sum !== no) {
      amicables.add(sum)
      amicables.add(no)
    }
  }
  return summation(amicables)
}

const startTime = Date.now()
const number = problem21(10000)
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  31626
// Running time (s): 0.036
