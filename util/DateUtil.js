module.exports = {
    /**
     *
     * @returns Date
     */
    getDate() {
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear();

        today = month + '-' + day + '-' + year;
        return today
    }
}