var katzDeli = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 0) {
    var next = `Currently serving ${katzDeliLine[0]}`
    colsole.log(next)
  }
  return katzDeli[0]
  katzDeli.shift()
}