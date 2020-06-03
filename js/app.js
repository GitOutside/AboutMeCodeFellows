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

  function FavExercises(favExerciseGuess){
    const favExercises = ['squat', 'bench', 'deadlift', 'shoulder press'];
    let objExercises = {};
    let favExerciseGuessLowerCase = favExerciseGuess.toLowerCase();
    for(let i of favExercises){ 
      objExercises[i] =  (objExercises[i] || 0) +1;
    }
    for (let j = 0; j < 5; j++){
      if (objExercises[favExerciseGuessLowerCase]){
        count++;
        return alert('Congratulations! You got one of my top 4 favorite exercises!')
      }else{
        favExerciseGuessLowerCase = prompt('Try again').toLowerCase
      }
    }
    return alert('My top four favorite exercises are '+ 
      favExercises[0] + ", "+ 
      favExercises[1] + ", "+ 
      favExercises[2] + " and "+ 
      favExercises[3] + ".")
  }
  FavExercises(prompt('What exercise is in my top four favorite?'))

alert('You got ' + count + ' questions correct out of 7.')

if (userName !== null){
  alert(userName + ' now you know a little about me! Here is some more information about me.')
} else{
  alert('I do not know your name, but here is some more information about me.');
}

