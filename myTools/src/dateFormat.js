function dateFormat(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hour = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
}
function padZero(timeStr) {
    return timeStr.length < 2 ? '0' + timeStr : timeStr;
}

module.exports = {
    dateFormat
}