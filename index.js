function takeANumber(currentLine, newName) {
  currentLine.push(newName)
  var position = currentLine.length
  return `Welcome, ${newName}. You are number ${position} in line.`
}
