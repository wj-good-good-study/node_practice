function htmlEscape(htmlStr) {
    return htmlStr.replace(/[<>&"]/g, c => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
            default:
                return c
        }
    })
}
function htmlUnEscape(htmlStr) {
    return htmlStr.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
}

module.exports = {htmlEscape, htmlUnEscape}