// Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier’) of the specified length, or 32 by default.
// Test Data:
// console.log(guid());
// console.log(guid(15));
// "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "b7pwBqrZwqaDrex"

function guid(len) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length,
        length = len || 32;
        
    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }
    
    return buf.join('');
}

console.log(guid());  
console.log(guid(15));