function range(limit) {
  let array = []
  for (i = 0; i < limit - 2; i++) {
    array[i] = i + 2
  }
  return array
}

function smallestCommonMultiple() {
  let array = range(20)
  let number = 570570, proceed = false

  while(true) {
    proceed = false
    for (let i = 0; i < array.length; i++) {
      if (number % array[i] !== 0) {
        proceed = true
        break
      }
    }
    if (proceed) {
      number += 570570
    }
    else {
      return number
    }
  }

}

const startTime = Date.now()
const number = smallestCommonMultiple()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)