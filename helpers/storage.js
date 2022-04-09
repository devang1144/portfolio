const multer = require('multer')

const DocumentStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'media/document')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    } 
})

const uploadFile = multer({ 
    storage: DocumentStorage,
 }).single('file')

module.exports = {
    uploadFile: uploadFile
}