// // chap 21-25


// Q1
var firstName = prompt("Enter your First Name.")
var lastName = prompt("Enter your Last Name.")
var fullName = firstName + " " + lastName
alert("Hello, " + fullName + "! Welcome!");

// Q2
var favoriteMobileModel = prompt("What is your favorite mobile phone model?");
var inputLength = favoriteMobileModel.length;
document.write("<h1>My favorite Phone is: " + inputLength + "The length of your favorite mobile phone model is: " + inputLength + "</h1>");

// Q3
var string = "Pakistani"
var finalString = string.indexOf("n")
document.write("<hr><h1>String: " + string + "<br> Index of 'n': " + finalString + "<h1>")

// Q4
var word = "Hello World"
var finalWord = word.lastIndexOf("l")
document.write("<hr><h1>String: " + word + "<br> Index of 'l': " + finalWord + "<h1>")

// Q5
var string = "Pakistani"
var finalString = string.indexOf("i")
document.write("<hr><h1>String: " + string + "<br> character at 3rd index: " + finalString  + "<h1>")

// Q6


// Q7
var city = "Hyderabad"
var newCity = city.replace("Hyderabad","Islambad")
document.write("<hr><h1>City: " + city + "<br> After replacement: " + newCity)


// Q8
var message = "Ali and Sami are best friends. They play cricket and football together."
var newMessage = message.replace(/and/g, "&");
document.write("<hr><h1>" + message + "<br>" + "After replacing: " + newMessage)


// Q9
// var value = 472
// var string = "472"
// document.write("<hr><h1>Value: " + value + "<br>Type: " + typeof value + "<br>Value: " + Value + "<br>Type: " + typeof string)
var string = "472"
var num = Number(string)
document.write("<hr><h1>Value: " + string + "<br>Type: " + typeof string + "<br>Value: " + num + "<br>Type: " + typeof num )


// Q10
var userInput = prompt("Enter your fav nut.")
var update = userInput.toUpperCase();
document.write("<hr><h1>User Input: " + userInput + "<br> UperCase: " + update)

// Q11
// var character = prompt("Enter any Character.") 
// var titleCase = toTitleCase(character);
// // var firtsChar = toTitleCase(character);
// document.write("<hr><h1>User Input: " + character + "<br> TitleCase: " + titleCase)

// Q12
// var num = 35.36 
// var newNum = num.toString().replace(".","")
// console.log(newNum)

// Q13
// var userName = prompt("Enter your Name.")
// for(i = 0 ; i < userInput.length ; i++  ){
//     if(userInput === 33 ||userInput === 44 ||charCode === 46 || charCode === 64) {
//      alert("Please enter a valid username!")
//     }
// }


// Q14
// var user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
// var firstChar = user.slice(0, 1).toUpperCase();
// var remainChar = user.slice(1).toLowerCase();
// var combine = firstChar + remainChar 
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var flag = false

// for(var i = 0 ; i<arr.length ; i++){
//     if(combine===arr[i]){
//         flag = true;
//         break;
//     }
// }
// if(flag === true ){
//     alert("cokies is avalaible at index " + arr.indexOf[i] + "in our bakery.")
// }

// // else if(flag === false){
// //     alert("We are sorry. " + user + " is not avalaible in our bakery! ")
// // }
// else{
//     alert("We are sorry. " + user + " is not avalaible in our bakery! ")

// }




// // Define the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// var userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// var firstChar = userInput.toLowerCase();
// var remainChar = userInput.slice(1).toUpperCase()
// var combine = firstChar + remainChar 

// // A[i].toLowerCase() === userInput.toLowerCase()
// // Perform case-insensitive search and inform user
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (combine === userInput[i]) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("cokies is avalaible at index " + arr.indexOf[i] + "in our bakery.");
// } else {
//     alert("We are sorry. " + user + " is not avalaible in our bakery!");
// }



// Q15
var password = prompt("Enter your password:");
function isValidPassword(password) {
    if (password.length < 6) {
        return false;
    }
    var containsAlphabet = false;
    var containsNumber = false;
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            containsAlphabet = true;
        } 
        else if (charCode >= 48 && charCode <= 57) {
            containsNumber = true;
        }
    }
    var startsWithNumber = (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57);

            return containsAlphabet && containsNumber && !startsWithNumber;
        }

        // Validate the password
        if (isValidPassword(password)) {
            alert("Password accepted.");
        } 
        else {
            alert("Please enter a valid password that meets the requirements.");
        }




// Q16
var university = "University of Karachi";
for(var i=0 ; i<university.length; i++){
    console.log(university.slice(i , i+1))
}

// Q17
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.slice(-1);
alert("Last character of the input: " + lastCharacter );


// Q18
// var mesage = "The quick brown fox jumps over the lazy dog."
// var lovercase = mesage.toLowerCase();
// var search = "the"
// var count = 0
// for (var i = 0; i < lovercase.length; i++) {
//     if(lovercase.slice(i , i+search.length === search)){
//         count++;
//     }
// }
// console.log("<h2>Number of occurrences of the word 'the': " + count + "</h2>");


var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase();
var wordToSearch = "the";
var count = 0;
for (var i = 0; i < lowerCaseSentence.length; i++) {
    if (lowerCaseSentence.slice(i, i + wordToSearch.length) === wordToSearch) {
        count++;
    }
}
console.log("<h2>Number of occurrences of the word 'the': " + count + "</h2>");


// chap 21

// Q1
// var allLower = userInput.toLowerCase;
var allLower = userInput.toLowerCase();

// Q2
var x = "Hello World";
x = x.toLowerCase();


// Q3
var y = "hello world";
y = y.toUpperCase();

// Q4
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();

// Q5
var myArray = ["Hello", "World"];
var lowerCaseElement = myArray.toLowerCase();


// Q6
var myString = "hello world";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);


// Q7
var cityName = "kaRacHi";
var capitalizedName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase();


// chap 21

// Q1
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);


// Q2
var sameWords = "captain";
var numberOfCharacters = sameWords.length;

// Q3
var animal = "elephant";
var seg = animal.slice(1, 5);

// Q4
var myString = "Hello World";
var numberOfCharacters = myString.length;


// Q5
var myString = "Hello World";
var numberOfCharacters = myString.length;
var slicedString = myString.slice(1, -3);


// Q6
var text = "To be or not to be."
var indx = text.indexOf("be");

// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");


// Q8


// Q9
if (text.slice(indexNum, indexNum + 1) !== '') {
} 
else {
}

// Q10
var string = "abcd"
var characterAtIndex2 = text.charAt(2);
console.log(characterAtIndex2);

// Q11
var text = "abcdefghij"
var cha = text.charAt(9)
console.log(cha)

// Q12
var str = "example"
var x = str.slice(-1)
console.log(x)


// Q13
var input = "example"
var cha = input.charAt(4)
console.log(cha)
