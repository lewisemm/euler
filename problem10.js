function* primeGenerator(limit) {
  let primes = [0]
  let next = 2
  let nexiIsAPrime, searching = true;

  while (searching && next <= limit) {
    nexiIsAPrime = true

    for (let i = 0; i < primes.length; i++) {
      if (next % primes[i] == 0) {
        nexiIsAPrime = false
        break
      }
    }
    if (nexiIsAPrime) {
      primes.push(next)
      yield next
    }
    
    if (next == 2) {
      next += 1
    }
    else {
      next += 2
    }
  }
  return `Limit of ${limit} has been reached`
}

function problem10() {
  let limit = 2000000
  let sum = 0, generator = primeGenerator(limit)
  let complete = false, val

  while (!complete) {
    val = generator.next().value
    if (typeof(val) === 'number') {
      sum += val
    }
    else {
      complete = true
    }
    console.log(val)
  }
  return sum
}

const startTime = Date.now()
console.log(problem10())
const endTime = Date.now()
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// Limit of 2000000 has been reached
// 142913828922
// Running time (s): 57.012

// Limit of 2000000 has been reached
// 142913828920
// Running time (s): 57.07

// Limit of 2000000 has been reached
// 142913828922
// Running time (s): 113.374

// Limit of 2000000 has been reached
// 142913828922
// Running time (s): 116.088
