const fs = require('fs');
const oxford = require('project-oxford');
const formidable = require('formidable');
const BaseRoute = require(appRoot + '/routing/BaseRoute');
const client = new oxford.Client('505456e4f4d14346ac574846112f2d0e');

class UploadRoute extends BaseRoute {
    constructor(core, req, res, params) {
        super(core, req, res, params);
    }

    handle() {
        const form = new formidable.IncomingForm();

        form.parse(this.req, (err, fields, files) => {
            const fileName = files['uploads[]'].name;
            this.onFileUploaded(files['uploads[]'].path, fileName.slice(fileName.indexOf('.'), fileName.length));
        });
    }

    onFileUploaded(path, extension) {
        const currentDate = +(new Date());
        const randomNumber = Math.floor(Math.random()*1000000);
        const filePath = `${currentDate}${randomNumber}${extension}`;

        fs.createReadStream(path).pipe(fs.createWriteStream('./frontend/dist/assets/' + filePath));

        client.face.detect({
            path: path,
            analyzesAge: true,
            analyzesGender: true
        }).then((response) => {
            response[0].faceAttributes.age = String(response[0].faceAttributes.age).replace('.', ',');
            console.log(response[0].faceAttributes)
            this.complete(
                {
                    path: 'assets/' + filePath,
                    age: response[0].faceAttributes.age,
                    gender: response[0].faceAttributes.gender
                }
            );
        }, (err) => {this.complete(err);});
    }
}

module.exports = UploadRoute;