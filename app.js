const fs = require("fs");

const { exec } = require("child_process");

// fs.readFile('./index.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })

const data = 'hello world'

fs.writeFile("newfile.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    exec("dir", (error, stdout, stderr) => {
      // console.log(data);
      if (error) {
        console.log(error);
        return;
      }
      if (stderr) {
        console.log(stderr);
        return;
      }
      console.log(`- ${stdout} - \n content \n ${data}`);
    });
  }
});
