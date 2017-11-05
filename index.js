function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return(`There is nobody waiting to be served!`)
  }

  return(`Currently serving ${katzDeliLine.shift()}.`)


}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length == 0){
    return(`The line is currently empty.`)
  }

  return(`The line is currently: `);

  for (i = 0; i >= katzDeliLine.length; i++){
      return(` ${i}. ${katzDeliLine[i]},`)
    }  
}
