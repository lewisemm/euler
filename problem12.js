function* triangleNumbers() {
  let triangle = 0;
  for (let i = 1; ; i++) {
    triangle += i
    yield triangle
  }
  // return ((limit + 1) * (0.5) * (limit))
}

function determineFactors(triangleNo) {
  const sqrt = Math.round(Math.sqrt(triangleNo))
  let factors = new Set(), temp

  for (let i = 1; i < sqrt; i++) {
    if (triangleNo % i === 0) {
      if (i === sqrt) {
        factors.add(i)
        continue
      }
      temp = triangleNo / i
      factors.add(i)
      factors.add(temp)
    }
  }
  return factors
}

function problem12() {
  const generator = triangleNumbers()
  let value
  let factors

  do {
    value = generator.next().value
    factors = determineFactors(value)
  }
  while (factors.size < 500)
  return value
}

const startTime = Date.now()
const number = problem12()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)
