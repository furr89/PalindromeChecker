function palindrome(str) {

    // Removes spaces and punctuations
    str = str.replace(/[.,\/#!$%\^&\*;:{}|=\-_`~()]/g, "").split(" ").join("");
    str = str.toLowerCase();
    
    let strMid = Math.floor(str.length / 2);
    
    // If the string length is impair, remove the middle
    if ((str.length % 2) != 0) {

        str = str.substring(0, strMid) + str.substring(strMid+1, str.length);
    }

    // Initialise 2 empty strings
    let leftStr = "";
    let rightStr = "";

    // Loop through the first half
    for (let i = 0; i < strMid; i++) {

        leftStr += str[i];
    }

    // Then loop through the second half from reverse
    for (let j = str.length-1; j >= strMid; j--) {

        rightStr += str[j];
    }

    console.log(leftStr, rightStr)
    // If the string are equal return true, else false
    if (leftStr == rightStr){

        return true;
    }
 
    return false;
}


// Regular test cases
palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
