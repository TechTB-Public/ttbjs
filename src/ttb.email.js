/* TTBJS VERSION 0.0.1 */

function emailIsValid(str) {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (str.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

return { emailIsValid }