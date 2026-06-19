const getInitials = (fullName) => {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0)} ${surname.charAt(0)}`
}

const createSlug = (string) => string.toLowerCase();

const average = (arr) => {
    let sum = 0;
    arr.forEach(n => {
        sum += n;
    });
    return sum / arr.length
};

module.exports = {
    getInitials,
    createSlug,
    average
}