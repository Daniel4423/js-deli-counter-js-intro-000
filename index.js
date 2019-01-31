function takeANumber(currentLine, newName) {
  currentLine.push(newName)
  var position = currentLine.length + 1
  return `Welcome, ${newName}. You are number ${position} in line.`
}
