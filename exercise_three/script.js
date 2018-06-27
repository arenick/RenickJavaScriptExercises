let name_list=["Hello. My name is ",""]
question1 = prompt('Would you like to print your name?')
if (question1=="yes") {
  let name = prompt("What is your name?","Enter your name here...")
  name_list.push(name)
  while (name !== null) {
    question3 = prompt("Would you like to print this again?","Enter response here...")
    if (question3==="no"){
      break;
    } else{
      name_list.push('!')
    }
  }
}
document.write(name_list.join(""));
