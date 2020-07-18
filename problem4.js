// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(number) {
  let strNumber = number + ''

  let first, last, difference

  while (true) {
    first = parseInt(strNumber[0])
    last = parseInt(strNumber[strNumber.length - 1])
    difference = first - last

    if (strNumber.length <= 1) {
      return true
    }
    else if (difference === 0) {
      strNumber = strNumber.slice(1, strNumber.length - 1) + ''
    }
    else if (difference !== 0) {
      return false
    }
  }

}

function findPalindrome() {
  let upperLimit = 999 * 999, lowerLimit = 100 * 100
  let unknownFactor;

  while (lowerLimit < upperLimit) {
    if (isPalindrome(upperLimit)) {
      for (let i = 999; i >= 100; i--) {
        if (upperLimit % i === 0) {
          unknownFactor = upperLimit / i
          if (`${unknownFactor}`.length === 3) {
            console.log(`${i} * ${unknownFactor} = ${upperLimit}`)
            return
          }
          else {
            continue
          }
        }
      }
    }
    upperLimit -= 1
  }
}

const startTime = Date.now()
findPalindrome()
const endTime = Date.now()
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)
