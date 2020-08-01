function teensInWords(number) {
  let returnValues = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  return returnValues[number]
}

function inWords(digit, pow) {
  const base = 10
  const placeValue = Math.pow(base, pow)
  digit *= placeValue
  switch (pow) {
    case 0: {
      let returnValues = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      }
      return returnValues[digit]
    }
    case 1: {
      let returnValues = {
        0: '',
        10: 'ten ',
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty ',
        50: 'fifty ',
        60: 'sixty ',
        70: 'seventy ',
        80: 'eighty ',
        90: 'ninety ',
      }
      return returnValues[digit]
    }
    case 2: {
      let returnValues = {
        0: ' and ',
        100: 'one hundred ',
        200: 'two hundred ',
        300: 'three hundred ',
        400: 'four hundred ',
        500: 'five hundred ',
        600: 'six hundred ',
        700: 'seven hundred ',
        800: 'eight hundred ',
        900: 'nine hundred ',
      }
      return returnValues[digit]
    }
    case 3: {
      let returnValues = {
        1000: 'one thousand ',
        2000: 'two thousand ',
        3000: 'three thousand ',
        4000: 'four thousand ',
        5000: 'five thousand ',
        6000: 'six thousand ',
        7000: 'seven thousand ',
        8000: 'eight thousand ',
        9000: 'nine thousand ',
      }
      return returnValues[digit]
    }
    default:
      return '<< NUMBERS IS OUT OF BOUNDS (1-1000! >>'
  }
}

function parseNumber(number) {
  let strNumber = `${number}`
  let power = strNumber.length - 1
  let wording = '', temp

  while (number > 0 && strNumber.length > 0) {
    if (10 < number  && number < 20) {
      wording += teensInWords(number)
      return wording
    }
    temp = strNumber.slice(1)
    if (parseInt(temp) !== 0 && power === 2) {
      wording += inWords(strNumber[0], power, false) + 'and '
    }
    else {
      wording += inWords(strNumber[0], power)
    }
    strNumber = temp
    number = parseInt(strNumber)
    power -= 1
  }
  return wording
}

function problem17(number) {
  let words = ''
  for (let i = 1; i <= number; i++) {
    words += parseNumber(i)
  }
  words = words.replace(/\s+/g, '')
  return words.length
}

const startTime = Date.now()
const number = problem17(1000)
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  21124
// Running time (s): 0.061
