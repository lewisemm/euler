function findPermutations(str) {
  if (!str || typeof(str) !== 'string') {
    return "Please specify a string for permutation calculations"
  }
  if (str.length < 2) {
    return str
  }
  let permutations = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (str.indexOf(char) !== i) {
      continue
    }

    const remainder = str.slice(0, i) + str.slice(i + 1, str.length)

    for (permutation of findPermutations(remainder)) {
      permutations.push(char + permutation)
    }
  }
  return permutations
}

function problem24(str) {
  return findPermutations(str)
}

const startTime = Date.now()
const number = problem24(`0123456789`)
const endTime = Date.now()
console.log('number: ', number[999999])
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)