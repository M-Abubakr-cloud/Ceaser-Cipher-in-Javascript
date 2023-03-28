function caesar_cipher(text, key) {
    let result = '';
    for (const element of text) {
        let char = element;
        if (/[a-zA-Z]/.test(char)) {
            if (char === char.toUpperCase()) {
                result += String.fromCharCode((char.charCodeAt(0) + key - 65) % 26 + 65);
            } else {
                result += String.fromCharCode((char.charCodeAt(0) + key - 97) % 26 + 97);
            }
        } else {
            result += char;
        }
    }
    return result;
}

function encrypt_file(filename) {
    const readline = require('readline');
    const fs = require('fs');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the key: ', (key) => {
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            const encrypted_text = caesar_cipher(data, parseInt(key));
            fs.writeFile(filename, encrypted_text, function(err) {
                if (err) throw err;
                console.log('File encrypted successfully!');
            });
        });
        rl.close();
    });
}

encrypt_file('file.txt');