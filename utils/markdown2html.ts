const fs = require('fs')
const path = require('path')

const getAllDirs = (path: string) => {
  const filePath = path.join(__dirname, path)
  fs.readdir(filePath, function (err, files) {
    console.log('files : ', files)
    if (err) {
      return console.log('error')
    }
    files.forEach((file) => {
      console.log('file name : ', file)
    })
  })
}

const main = () => {
  getAllDirs('../post/')
}

main()
