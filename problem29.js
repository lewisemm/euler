function problem29() {
  let terms = {}
  let ans
  for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
      ans = BigInt(Math.pow(a, b))
      if (typeof(terms[ans]) === 'undefined') {
        terms[ans] = `${a}**${b}`
      }
      else {
        terms[ans] = terms[ans] + `, ${a}**${b}`
      }
    }
  }
  return Object.keys(terms).length
}

const startTime = Date.now()
const number = problem29()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)