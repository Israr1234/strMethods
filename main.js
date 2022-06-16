// Exercise # 1
document.write("<h1>Exercise # 1</h1>")
var str = '';
var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");
var fullName = fName + " " + lName;

str += "<h1>Welcome " + fullName + "!</h1>";
document.write(str);

//  Exercise # 2    //
document.write("<h1>Exercise # 2</h1>")
var favMobile = prompt("Please enter your favorite mobile phone model");

var str1 = "my favorite phone is : " + favMobile + "<br>" + "length of string: " + favMobile.length;

document.write(str1);

// Exercise # 3

document.write("<h1>Exercise # 3</h1>")
var text = "Pakistani";

var str2 = "String: " + text + "<br/>" + "Index of 'n': " + text.indexOf("n");
document.write(str2);

//     // Exercise # 4 //

document.write("<h1>Exercise # 4</h1>")
var text1 = "Hello World";

var str3 = "String: " + text1 + "<br/>" + "Last index of 'l': " + text1.lastIndexOf("l");
document.write(str3);

// // Exercise # 5

document.write("<h1>Exercise # 5</h1>")
var str4 = "<p>String: " + text + "<br/>" + "Character at index 3: " + text.charAt(3) + "</p>";
document.write(str4);

// // Exercise # 6

document.write("<h1>Exercise # 6</h1>")
var fullName1 = fName.concat(" " + lName);

str5 = "<h1>Welcome " + fullName1 + "!</h1>";
document.write(str5);

// // // Exercise # 7
document.write("<h1>Exercise # 7</h1>")

var city = "Hyderabad";
var repCity = city.replace("Hyder", "Islam");

var str6 = "<p>City: " + city + "<br/>" + "After replacement: " + repCity + "</p>";
document.write(str6);

// // // Exercise # 8

document.write("<h1>Exercise # 8</h1>")
var message = "Ali and Sami are best friends. They play cricket and football together."
var repMessage = message.replace(/and/g, "&");

str7 = "<p>Message: " + message + "<br/>" + "After replacement: " + repMessage + "</p>";
document.write(str7);

// // // Exercise # 9
document.write("<h1>Exercise # 9</h1>")

var myStr = "472";
var myNum = Number(myStr);

str8 = "<p>Value: " + myStr + "<br/>" + "Type: " + typeof (myStr) + "<br/>Value: " + myNum + "<br/>Type: " + typeof (myNum) + "</p>";
document.write(str8);

// // // Exercise # 10

document.write("<h1>Exercise # 10</h1>")
var inputUrl = prompt("Please enter url in following format (www.facebook.com/www.yahoo.com )");
var indNum = inputUrl.indexOf(".");
var domain = inputUrl.slice(indNum + 1);

str9 = "<p>URL: " + inputUrl + "<br/>" + "Domain: " + domain + "</p>";
document.write(str9);

// // Exercise # 11

document.write("<h1>Exercise # 11</h1>");
var inputStr1 = prompt("Please enter text in lower case");

upperCase = "<p>User input: " + inputStr1 + "<br/>" + "Upper case: " + inputStr1.toUpperCase() + "</p>";
document.write(upperCase);

// // Exercise # 12
document.write("<h1>Exercise # 12</h1>");
var inputStr2 = prompt("Please enter text in upper case");

lowerCase = "<p>User input: " + inputStr2 + "<br/>" + "Lower case: " + inputStr2.toLowerCase() + "</p>";
document.write(lowerCase);

// // Exercise # 13
document.write("<h1>Exercise # 13</h1>");

var inputStr3 = prompt("Please enter text either lower or upper case");
var titleStr = inputStr3.charAt(0).toUpperCase() + inputStr3.substring(1).toLowerCase();

bothCase = "<p>User input: " + inputStr3 + "<br/>Title case: " + titleStr + "</p>";
document.write(bothCase);

// // Exercise # 14
document.write("<h1>Exercise # 14</h1>");

var num2 = 35.36;
var numToStr = String(num2);
var indexDot = numToStr.indexOf(".");
numToStr = numToStr.slice(0, indexDot) + numToStr.slice(indexDot + 1);

point = "<p>Number: " + num2 + "<br/>" + "Result: " + numToStr + "</p>";
document.write(point);

// // Exercise # 15
document.write("<h1>Exercise # 15</h1>");

var a = "3", b = "3";

aB = "<p>a is " + a + "<br/>" + "b is " + b + "<br/>a + b is " + a + b + "</p>";
document.write(aB);

// // Exercise # 16
document.write("<h1>Exercise # 16</h1>");

min = "<p>a is " + a + "<br/>b is " + b + "<br/>a - b is " + (a - b) + "</p>";
document.write(min);

// // Exercise # 17

// // Exercise # 18
document.write("<h1>Exercise # 18</h1>");

var bakeryItems1 = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemOrdered1 = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");

var flag1 = false;

for (var i = 0; i < bakeryItems1.length; i++) {
    if (bakeryItems1[i].toLowerCase() === itemOrdered1.toLowerCase()) {
        var str = "<p>" + itemOrdered1.toLowerCase() + " is <b>available</b> at index " + i + " in our bakery</p>";
        flag1 = true;
        break;
    }
}

if (!flag1) {
    str += "<p>We are sorry. " + itemOrdered1.toLowerCase() + " is <b>not available</b> in our bakery</p>";
}
document.write(str);
// // Exercise # 19
document.write("<h1>Exercise # 19</h1>");

var strComp1 = prompt("Enter first string to compare");
var strComp2 = prompt("Enter second string to compare");
let compResult = strComp1.localeCompare(strComp2);

if (compResult === 1) {
    str += "<p>" + strComp1 + " is greater than " + strComp2 + "</p>";

}
else if (compResult === -1) {
    str += "<p>" + strComp1 + " is less than " + strComp2 + "</p>";
}
else {
    str += "<p>" + strComp1 + " is equal to " + strComp2 + "</p>";
}
document.write(str);
// // Exercise # 20

document.write("<h1>Exercise # 20</h1>");
// // Exercise # 21

document.write("<h1>Exercise # 21</h1>");

var university = "University of karachi";
for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>")
}

// // Exercise # 22

document.write("<h1>Exercise # 22</h1>");

var inputStr4 = prompt("Enter string");
let strLen = inputStr4.length;

var lastChar = "<p>User input: " + inputStr4 + "<br/>Last character of input: " + inputStr4.charAt(strLen - 1) + "</p>";
document.write(lastChar);

// // Exercise # 23

document.write("<h1>Exercise # 23</h1>");

var paraText = "The quick brown fox jumps over the lazy dog";
let counter1 = 0;

for (var i = 0; i < paraText.length; i++) {
    if (paraText.substring(i, i + 3).toLowerCase() === "the") {
        counter1 += 1;
    }
}

var resultText = "<p>Text: " + paraText + "<br/>There are " + counter1 + " occurrence(s) of the word 'the'</p>"
document.write(resultText);

// // Exercise # 24
document.write("<h1>Exercise # 24</h1>");


var inputStr4;
var inputStr5 = prompt("Enter string  number of vowels & consonants");
let strLength = inputStr4.length;
let vowels = 0, consonants = 0;

for (var i = 0; i < inputStr5.length; i++) {
    if (inputStr5.charAt(i) === "A" || inputStr5.charAt(i) === "a" || inputStr5.charAt(i) === "E" || inputStr5.charAt(i) === "e" || inputStr5.charAt(i) === "I" || inputStr5.charAt(i) === "i" || inputStr5.charAt(i) === "O" || inputStr5.charAt(i) === "o" || inputStr5.charAt(i) === "U" || inputStr5.charAt(i) === "u") {
        vowels += 1;
    }
    else {
        consonants += 1;
    }
}

var str11 = "<p>Input String: " + inputStr5 + "<br/>Vowels in the string: " + vowels + "<br/>Consonants in the string: " + consonants + "</p>";


document.write(str11);


