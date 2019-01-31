function takeANumber(currentLine, newName) {
  currentLine.append(newName)
  var position = currentLine.length + 1
  return `Welcome, ${newName}. You are number ${position} in line.`
}
