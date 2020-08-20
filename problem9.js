function isPythagoras(opp, adj) {
  const hyp2 = Math.pow(opp, 2) + Math.pow(adj, 2)
  const hyp = Math.sqrt(hyp2)
  return (hyp2 % hyp === 0)? hyp: false
}

function summation(opp, adj, hyp) {
  return opp + adj + hyp
}

function problem24() {
  let hyp, sum

  for (let adj = 2; adj < 1000; adj++) {
    for (let opp = 2; opp < 1000; opp++) {
      hyp = isPythagoras(opp, adj)
      if (hyp && hyp < 1000) {
        sum = summation(opp, adj, hyp)
        if (sum === 1000)
          return adj * opp * hyp
      }
    }
  }
}

const startTime = Date.now()
const number = problem24()
const endTime = Date.now()
console.log('number: ', number)
const runningTime = endTime - startTime
console.log(`Running time (s): ${runningTime / 1000}`)