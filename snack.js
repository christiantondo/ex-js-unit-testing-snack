const getInitials = (fullName) => {
    const [name, surname] = fullName.split(" ");
    return `${name.charAt(0)} ${surname.charAt(0)}`
}

module.exports = {
    getInitials
}