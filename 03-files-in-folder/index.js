const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(err);
      return
    }
    for (let file of files){
        if(file.isFile()) {
            //console.log(file.name + ' - ' + path.extname(file.name));
            //console.log(JSON.stringify(file.name).replace(/\"/g, ""));
            let fileSize;
            fs.stat(path.join(__dirname, 'secret-folder'), (err, file) => {
                if (err) {
                    console.error(err);
                    return
                }
                fileSize = file.size;
                //console.log(file.name + ' - ' + path.extname(file.name) + ' - ' + fileSize);
            })
            console.log(path.parse(file.name).name + ' - ' + path.extname(file.name) + ' - ' + fileSize);
        }
    }
})
