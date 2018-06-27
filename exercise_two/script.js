let question1 = prompt("Do you want to play", "Enter response here...");
let word_list = []

var i = 0
if (question1=='yes'){
  do{
    i = i + 1
    question2 = prompt("Enter a word")
    word_list.push(question2)
    question3 = prompt('Do you want to play again?')
     if (question3=='no'){
       break
     } else{
       continue
     }
  } while(i < 100);
} else {
  document.write('Ok, we are done')
}

document.write(word_list.join(" "));
