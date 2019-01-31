function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var position = katzDeliLine.length
  return `Welcome, ${newName}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var nextCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nextCustomer}.`;
  }
}
