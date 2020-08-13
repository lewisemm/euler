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

function problem23(limit) {
  let abundant = []
  let divisors = 0, sum = 0

  // get the abundant integers
  for (let i = 2; i <= limit; i++) {
    divisors = getDivisors(i)
    if (summation(divisors) > i) {
      abundant.push(i)
    }
  }

  // mark any integers that can be gotten
  // from the sum of two abundant integers
  let arr = new Array(limit)
  for (let ab1 of abundant) {
    for (let ab2 of abundant) {
      if (ab2 < ab1) {
        continue
      }
      if ((ab1 + ab2) <= limit) {
        arr[ab1 + ab2] = true
      }
      else {
        break
      }
    }
  }
  
  // sum the unmarked integers (which correspond to the array index)
  for (let i = 1; i < limit; i++) {
    if (!arr[i]) {
      sum += i
    }
  }
  return sum
}

const startTime = Date.now()
const number = problem23(28123)
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)