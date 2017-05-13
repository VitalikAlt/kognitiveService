var oxford = require('project-oxford'),
    client = new oxford.Client('505456e4f4d14346ac574846112f2d0e');

// var face1, face2;
// var faceList = client.face.faceList;
//
// faceList.list().then(function (res) {console.log(res)}, function (err) {console.log(err)});
//
// // faceList.create('678', {name: '3', userData: '4'}).then(function (res) {console.log(res)}, function (err) {console.log(err)});
// var first = client.face.detect({
//                     path: __dirname + '/1.jpg',
//                     returnFaceId: true,
//                     analyzesFaceLandmarks: true,
// 	                analyzesAge: true,
// 	                analyzesFacialHair: true,
// 	                analyzesGender: true,
// 	                analyzesHeadPose: true,
// 					analyzesSmile: true
//                 })
//
// console.log(first);

// var second = client.face.detect({
//                     path: __dirname + '/2.jpg',
//                     returnFaceId: true
//                 })
//
// var third = client.face.detect({
//                     path: __dirname + '/6.jpg',
//                     returnFaceId: true
//                 })
//
// var fourth = client.face.detect({
//                     path: __dirname + '/4.jpg',
//                     returnFaceId: true
//                 })
// var first = faceList.addFace('123', {
// 	path: __dirname + '/1.jpg'
// })

// var second = faceList.addFace('678', {
// 	path: __dirname + '/2.jpg'
// })
//{ persistedFaceId: '6d7dde8d-6567-420f-a4cd-bd51ce7f7dff' }
//{ persistedFaceId: '89eb6fe8-2289-4ce6-9cc9-355737b82665' }

// Promise.all([first, second]).then((res) => {
// 	console.log(res);
// 	client.face.similar(res[0].persistedFaceId, {candidateFaces: [res[1].persistedFaceId]})
// 	.then(function (res) {console.log(res)}, function (err) {console.log(err)});
// }, (err) => {
// 	console.log(err);
// })

// Promise.all([first, second, third, fourth]).then((res) => {
// 	console.log(res[0][0]);
// 	client.face.similar(res[0][0].faceId, {candidateFaces: [res[1][0].faceId, res[2][0].faceId, res[3][0].faceId]})
// 	.then(function (res) {console.log(res)}, function (err) {console.log(err)});
// }, (err) => {
// 	console.log(err);
// })









client.face.detect({
    path: __dirname + '/3.jpg',
    analyzesAge: true,
    analyzesGender: true
}).then(function (response) {
    console.log('The age is: ' + response[0].faceAttributes.age);
    console.log('The gender is: ' + response[0].faceAttributes.gender);
}, function (err) {console.log(err);});

/*var faceList = client.face.faceList;
 faceList.create(123, {name: '1', userData: {}}).then(function (res) {console.log(res)}, function (err) {console.log(err)});

 faceList.addFace(123, {
 path: __dirname + '/1.jpg',
 name: 'test'}).then(function (res) {console.log(res)}, function (err) {console.log(err)});

 faceList.list().then(function (res) {console.log(res)}, function (err) {console.log(err)});*/
