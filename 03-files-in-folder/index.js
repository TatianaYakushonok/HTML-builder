const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'secret-folder');

fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return
    }
    for (let file of files){
        if(file.isFile()) {
            let fileSize = 0;
            fs.stat(dir + "\/" + JSON.stringify(file.name).replace(/\"/g, ""), (err, stats) => {
                if (err) {
                    console.error(err);
                    return
                }
                fileSize = stats.size;
                let fileName = path.parse(file.name).name;
                let fileExt = path.extname(file.name);
                console.log(fileName + ' - ' + fileExt + ' - ' + fileSize + 'b');
            })
        };
    }
})
