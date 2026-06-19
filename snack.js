const getInitials = (fullName) => {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0)} ${surname.charAt(0)}`
}

const createSlug = (string) => string.toLowerCase()

module.exports = {
    getInitials,
    createSlug
}