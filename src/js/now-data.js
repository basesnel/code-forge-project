export function nowDataCreat() {
    const now = new Date();
    const dateWithoutTime = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}/${addLeadingZero(now.getFullYear())}`;
    return dateWithoutTime;
    function addLeadingZero(value) {
        return String(value).padStart(2, '0');
    }
}
