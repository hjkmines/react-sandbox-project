// Write a pattern that matches e-mail addresses.

// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character .( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email('me-info@example.com');


// Write a JavaScript program to count number of words in string.

// The script will be used to:

// - Remove white-space from start and end position.
// - Convert 2 or more spaces to 1.
// - Exclude newline with a start spacing.
// Pictorial Presentation:

function count_words()
{
str1= document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("noofwords").value = str1.split(' ').length;
}
