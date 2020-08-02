function isLeap(year) {
  if (year % 4 === 0 || year % 400 === 0) {
    return 29
  }
  return 28
}

function getMonths(year) {
  return {
    'January': 31,
    'February': isLeap(year),
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
  }
}

function problem19() {

  // Cycle through 1900 although it's not part of 20th Century. Because we have
  // a reference point of 1st Jan 1900, we need to loop through it to keep track
  // of the dates
  let days = 0
  let months = getMonths(1900)
  for (let month in months) {
    days += months[month]
  }

  let sundays = 0
  for (let year = 1901; year <= 2000; year++) {
    months = getMonths(year)
    for (let month in months) {
      if (days % 7 === 0) {
        sundays += 1
      }
      days += months[month]
    }
  }
  return sundays
}

const startTime = Date.now()
const number = problem19()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)

// number:  171
// Running time (s): 0
