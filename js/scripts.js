//Buisness Logic
var countFunction = function(countTo, countBy) {
  var numbers = [];
  for(var index = countBy; index <= countTo; index += countBy) {
  numbers.push(index);
  };
  return numbers;
};

//grocery list function
  var groceryFunction = function(items) {

    var upperCase = items.map(function(item){
      return item.toUpperCase();
    });
    finalItem = upperCase.sort();
    return finalItem;
  }


var sentenceFunction = function(input) {
  var letters = input.split("");
  console.log(letters);
  var finalLetters = letters.map(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      letter = "-";
      return letter;
    } else {
      return letter;
    }
  });
  var finalSentence = finalLetters.join("");
  return finalSentence;
}


// Interface Logic
$(document).ready(function() {
$("#userNumbers").submit(function(event) {
    event.preventDefault();
     var userCountTo = parseInt($("#countTo").val());
     var userCountBy = parseInt($("#countBy").val());


     if (userCountBy > userCountTo) {
       alert("The value to count by can't be greater than the value to count to.");
     } else if (userCountTo < 0 || userCountBy < 0) {
       alert("The values can't be less than zero.");
     } else if (isNaN(userCountTo) || isNaN(userCountBy)) {
       alert("You must enter a number");
     }

     var output = countFunction(userCountTo, userCountBy);

     $("#count-output").text(output);

  })

    $("#groceries").submit(function(event) {
      var items= [];
      for (var input = 1; input <= 4; input +=1) {
        items.push($("#item" + input.toString()).val());
      };
      $("#groceries").hide();
      $("#groceriesOutput").show();
      $("#groceriesOutput").text(groceryFunction(items));
      event.preventDefault();
  });


    $("#userString").submit(function(event) {
      event.preventDefault();
      var sentence = $("#sentence").val();
      $("#puzzle-output").text(sentenceFunction(sentence));
    });
  });
