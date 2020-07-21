function* primeGenerator(limit = 10001) {
  let primes = [2]
  let next = 3
  let nexiIsAPrime, limitReached = false

  while (!limitReached) {
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

    if (primes.length === limit) {
      limitReached = true
      continue
    }
    
    next += 2
  }
  return `Prime number at position ${limit} is ${next}`
}

function problem7() {
  const generator = primeGenerator()
  let next
  do {
    next = generator.next().value
  }
  while (typeof(next) === 'number')
  return next
}

const startTime = Date.now()
const number = problem7()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)