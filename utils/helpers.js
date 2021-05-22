const helpers = {
    format_date: date => {
        return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
    }
}; 

// exporting helper
module.exports = helpers; 