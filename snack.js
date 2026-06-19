const getInitials = (fullName) => {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0)} ${surname.charAt(0)}`
}

const createSlug = (string) => string.toLowerCase().replaceAll(" ", "-");

const average = (arr) => {
    let sum = 0;
    arr.forEach(n => {
        sum += n;
    });
    return sum / arr.length
};

const isPalindrome = (string) => {
    const cleanString = string.toLowerCase().replaceAll(" ", "");
    const reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
};

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}