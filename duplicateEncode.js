function duplicateEncode(word) {
    var str = '';
    for (let i = 0; i < word.length; i++) {
        var regex = new RegExp(escapeRegExp(word[i]), 'ig');
        str += (word.match(regex).length === 1) ? '(' : ')';
    }
    return str;
}
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}