const process = require('process');
const fs = require('fs');
const path = require('path');

let output = path.join(__dirname, 'text.txt');
let stream = fs.createWriteStream(output, 'utf-8');

console.log('Введите текст');

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
        console.log('Good bye');
        process.exit(); 
    }
})

process.on('SIGINT', function(code) {
    if(code === 'SIGINT') {
        console.log('Good bye!');
        process.exit();
    }
})

process.stdin.pipe(textFile);
