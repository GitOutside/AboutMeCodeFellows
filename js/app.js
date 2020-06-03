'use strict';
let count = 0;
var userName = prompt("What's your name?")
if (userName !== null){
  alert('Welcome ' + userName + ', here are some questions to get to know me!');
} else{
  alert('I do not know your name.');
}

var truckColor = prompt('Is my truck white?');
var truckColorLowerCase = truckColor.toLowerCase();
  if(truckColorLowerCase === "yes" || truckColorLowerCase === "y"){
    count++;
    console.log('Your Answer is Correct!');
    alert('Your Answer is Correct!')
  } else if(truckColorLowerCase === "no" || truckColorLowerCase === "n"){
    console.log('Your Answer is Incorrect!');
    alert('Your Answer is Incorrect!')
  } else{
    alert("Not a Valid Answer!")
  }

var houseColor = prompt('Is my house green?');
var houseColorLowerCase = houseColor.toLowerCase();
  if(houseColorLowerCase === "yes" || houseColorLowerCase === "y"){
    console.log('Your Answer is Incorrect!');
    alert('Your Answer is Incorrect!')
  } else if(houseColorLowerCase === "no" || houseColorLowerCase === "n"){
    count++;
    console.log('Your Answer is Correct!');
    alert('Your Answer is Correct!')
  } else{
    alert("Not a Valid Answer!")
  }

var hairColor = prompt('Is my hair black?');
var hairColorLowerCase = hairColor.toLowerCase();
  if(hairColorLowerCase === "yes" || hairColorLowerCase === "y"){
    count++;
    console.log('Your Answer is Correct!');
    alert('Your Answer is Correct!')
  } else if(hairColorLowerCase === "no" || hairColorLowerCase === "n"){
    console.log('Your Answer is Incorrect!');
    alert('Your Answer is Incorrect!')
  } else{
    alert("Not a Valid Answer!")
  }

var birthPlace = prompt('Was I born in California?');
var birthPlaceLowerCase = birthPlace.toLowerCase();
  if(birthPlaceLowerCase === "yes" || birthPlaceLowerCase === "y"){
    console.log('Your Answer is Incorrect!');
    alert('Your Answer is Incorrect!')
  } else if(birthPlaceLowerCase === "no" || birthPlaceLowerCase === "n"){
    count++;
    console.log('Your Answer is Correct!');
    alert('Your Answer is Correct!')
  } else{
    alert("Not a Valid Answer!")
  }

var beforeNineties = prompt('Was I born before 1990?');
var beforeNinetiesLowerCase = beforeNineties.toLowerCase();
  if(beforeNinetiesLowerCase === "yes" || beforeNinetiesLowerCase === "y"){
    count++;
    console.log('Your Answer is Correct!');
    alert('Your Answer is Correct!')
  } else if(beforeNinetiesLowerCase === "no" || beforeNinetiesLowerCase === "n"){
    console.log('Your Answer is Incorrect!');
    alert('Your Answer is Incorrect!')
  } else{
    alert("Not a Valid Answer!")
  }

  function FavNumber(favNumber){
    for(let i = 0; i < 3; i++){
      if (parseInt(favNumber) < 7){
        favNumber = prompt('try higher');
      }else if(parseInt(favNumber) > 7){
        favNumber = prompt('try lower');
      }else if(parseInt(favNumber) === 7){
        count++;
        return alert('Great Job! you got it right!')
      }else{
        favNumber = prompt('must enter a number')
      }
    }
    return alert('My favorite number is 7!')
  }
  FavNumber(prompt('What do you think my favorite number is? hint: try from 0 to 15'));


alert('You got ' + count + ' questions correct out of 6.')

if (userName !== null){
  alert(userName + ' now you know a little about me! Here is some more information about me.')
} else{
  alert('I do not know your name, but here is some more information about me.');
}

