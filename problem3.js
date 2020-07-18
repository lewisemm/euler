// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const number = 600851475143;

function* primeGenerator(limit) {
  let primes = []
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

function isPrime(number) {
  let limitReached = false, nextPrime = 0
  let generator = primeGenerator(number)

  while (!limitReached && nextPrime <= number) {
    nextPrime = generator.next().value
    if (number === nextPrime) {
      return true
    }
  }
  return false
}

function findLargestPrimeFactor(number) {
  let start = Math.ceil(Math.sqrt(number))
  console.log(`start is ${start}`)

  // if root is even, make it odd. 2 is the only even prime number.
  if (start % 2 == 0) {
    start -= 1
  }

  while (start > 1) {
    // if number can be divided precisely, check if divisor is a prime
    if (number % start == 0) {
      if (isPrime(start)) {
        return start
      }
    }
    start -= 2
  }
}

function primeFactorMethod(number) {
  let generator = primeGenerator(number)
  prime = generator.next().value
  
  while ((prime * prime) < number) {
    if (number % prime == 0) {
      console.log(`${number}/${prime} = ${number/prime}`)
      number = number / prime
    }
    prime = generator.next().value
  }
  if (prime > number) {
    return prime  
  }
  return number
}

const startTime = Date.now()
// console.log(findLargestPrimeFactor(number))
console.log(primeFactorMethod(number))
const endTime = Date.now()
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)