function range(limit) {
  let array = []
  for (i = 0; i < limit; i++) {
    array[i] = i + 1
  }
  return array
}

function sumSquares(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 2)
  }
  return sum
}

function squareSum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return Math.pow(sum, 2)
}

function problem6() {
  let array = range(100)
  
  const sumSQ = sumSquares(array)
  const sqSum = squareSum(array)
  return sumSQ - sqSum
}

const startTime = Date.now()
const number = problem6()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)
