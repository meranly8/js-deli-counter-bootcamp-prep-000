var katzDeli = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(){
  return katzDeli[0]
  katzDeli.shift()
}