function collatz(number) {
  let chain = 1
  while (number !== 1) {
    if (number % 2 == 0) {
      number = number / 2
    } 
    else {
      number = (number * 3) + 1
    }
    chain += 1
  }
  return chain
}

function problem14(limit=1000000) {
  let longest = 0, temp, ans;
  for (let number = 1; number < limit; number++) {
    temp = collatz(number)
    if (temp > longest) {
      longest = temp
      ans = number
    }
  }
  return {longest, ans}
}

const startTime = Date.now()
const number = problem14()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  { longest: 525, ans: 837799 }
// Running time (s): 1.336
