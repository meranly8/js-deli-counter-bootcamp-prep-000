var katzDeli = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine < 0)
  return katzDeli[0]
  katzDeli.shift()
}