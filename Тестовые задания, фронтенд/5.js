function palindrome(str) {
    s = str.split("").reverse().join("");;
    if (s == str) {
        return true;
    }
    else {
        return false;
    }
}

console.log(palindrome("d sds d"))