const fs = require('fs');
const filename = 'file.txt';
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    data = data.replace(/ /g, '').replace(/\n/g, '').replace(/\t/g, '');
    const freq = {};
    for (const element of data) {
        if (freq[element]) {
            freq[element]++;
        } else {
            freq[element] = 1;
        }
    }
    for (const [key, value] of Object.entries(freq)) {
        console.log(`${key}: ${value}`);
    }
});