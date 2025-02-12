const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');

let output = path.join(__dirname, 'text.txt');
let stream = fs.createWriteStream(output, 'utf-8');

stdout.write('Введите текст' + '\n');

const textFile = stream.on('readable', function() {
    const data = stream.read();
    if(data !== null){
        
        fs.appendFile(output, data, 'utf-8', function(err){
            if(err){
                console.log(err);
            }
        });  
    }
})

process.stdin.on('data', function(data) {
    if(data.toString().trim() === 'Exit') {
        stdout.write('Пока');
        exit(); 
    }
})

process.on('SIGINT', function(code) {
    if(code === 'SIGINT') {
        stdout.write('Пока!');
        exit();
    }
})

stdin.pipe(textFile);
