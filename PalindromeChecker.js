function palindrome(str) {

    // Removes spaces and punctuations
    str = str.replace(/[.,\/#!$%\^&\*;:{}|=\-_`~()]/g, "").split(" ").join("");
    str = str.toLowerCase();
    
    revStr = str.split("").reverse().join("");

    console.log(str, revStr)
    // If the string are equal return true, else false
    if (str == revStr){

        return true;
    }
 
    return false;
}


// Test Cases
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
