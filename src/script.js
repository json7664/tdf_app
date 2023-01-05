// const os = require('os');
// const {dialog} = require('electron').remote;

document.getElementById('outputBrws').addEventListener('click', function() {
    console.log('browse button clicked');
    // if (os.platform() == 'win32') {
    //   dialog.showOpenDialog({
    //     properties: ['openDirectory']
    //   }).then(result => {
    //     console.log(result.filePaths[0]);
    //     document.getElementById('outputDir').value = result.filePaths[0];
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  });