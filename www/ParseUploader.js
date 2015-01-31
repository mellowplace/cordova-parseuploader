var exec = require('cordova/exec');

exports.upload = function(fileURI, megapixels, quality, success, error) {
    exec(success, error, "ParseUploader", "upload", [fileURI, megapixels, quality]);
};
