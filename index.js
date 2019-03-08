var katzDeliLine = []

function takeANumber(position, name){
  position.push(name)
  return `Welcome, ${name}. You are number ${position.length} in line.`
}


function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return `There is nobody waiting to be served!`
  } else {
    var firstPerson = []
    firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine){
  var lineList
  var j = 0
  var i = 0
  if (!katzDeliLine.length){
    return `The line is currently empty.`
  } else {
    // for (var i = 0; i<katzDeliLine.length; i++){
    //   var lineList
    //   var j = i + 1
    //   lineList = parseInt(j) + ". " + katzDeliLine[i]
    // }\

    do{
        j = i + 1
        lineList = parseInt(j) + ". " + katzDeliLine[i] + ", "
        i++
    }while(i < katzDeliLine.length)


    return `"The line is currently: " + ${lineList}`
  }
}
