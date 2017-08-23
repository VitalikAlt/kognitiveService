webpackJsonp([2,4],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    HttpService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.makeFileRequest = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", _this.baseUrl + 'upload', true);
            xhr.send(formData);
        });
    };
    HttpService.prototype.signIn = function (login, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'signIn';
        return this.http
            .post(url, JSON.stringify({ login: login, password: password }), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.signUp = function (login, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'signUp';
        return this.http
            .post(url, JSON.stringify({ login: login, password: password }), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.savePhoto = function (login, password, photoData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'savePhoto';
        photoData.login = login;
        photoData.password = password;
        return this.http
            .post(url, JSON.stringify(photoData), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(157);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(httpService, modalService) {
        this.httpService = httpService;
        this.modalService = modalService;
        this.modalError = '';
        this.state = 1;
        this.modalState = 1;
        this.noPhotoMessage = '';
        this.onePagePath = '';
        this.onePageGender = '';
        this.onePageAge = 0;
        this.login = '';
        this.password = '';
    }
    AppComponent.prototype.emptyFunction = function () { };
    AppComponent.prototype.detect = function (mode) {
        this.noPhotoMessage = '';
        if (!this.filesToUpload || !this.filesToUpload.length)
            return this.noPhotoMessage = 'No photo, please choose photo!';
        this.upload(mode);
    };
    AppComponent.prototype.fileChangedEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AppComponent.prototype.upload = function (mode) {
        var _this = this;
        this.uploadHelper = 'Загрузка...';
        this.httpService.makeFileRequest(this.filesToUpload).then(function (result) {
            var parseResult = JSON.parse(JSON.parse(JSON.stringify(result)));
            _this.filesToUpload = [];
            _a = [parseResult['path'], parseResult['age'], parseResult['gender']], _this.onePagePath = _a[0], _this.onePageAge = _a[1], _this.onePageGender = _a[2];
            if (mode)
                _this.modalState = 2;
            else
                _this.state = 2;
            var _a;
        }, function (error) {
            _this.filesToUpload = [];
            console.error(error);
        });
    };
    AppComponent.prototype.openSave = function () {
        this.modalError = '';
        _a = ['', ''], this.login = _a[0], this.password = _a[1];
        this.modalService.open(this.content, { size: 'lg' });
        var _a;
    };
    AppComponent.prototype.openSignUp = function () {
        this.modalError = '';
        _a = ['', ''], this.login = _a[0], this.password = _a[1];
        this.modalService.open(this.content1, { size: 'lg' });
        var _a;
    };
    AppComponent.prototype.openSignIn = function () {
        this.modalError = '';
        _a = ['', ''], this.login = _a[0], this.password = _a[1];
        this.modalService.open(this.content2, { size: 'lg' });
        var _a;
    };
    AppComponent.prototype.openAddPhoto = function () {
        this.modalError = '';
        this.modalService.open(this.content3, { size: 'lg' });
    };
    AppComponent.prototype.signIn = function (close) {
        var _this = this;
        if (!this.login || !this.password)
            return this.modalError = 'Error: no login or password';
        this.httpService.signIn(this.login, this.password)
            .subscribe(function (result) {
            if (typeof result === 'string')
                return _this.modalError = result;
            _this.photos = result;
            _this.state = 3;
            close();
        }, function (error) {
            _this.modalError = error;
        });
    };
    AppComponent.prototype.signUp = function (close) {
        var _this = this;
        if (!this.login || !this.password)
            return this.modalError = 'Error: no login or password';
        this.httpService.signUp(this.login, this.password)
            .subscribe(function (result) {
            if (result !== '1')
                return _this.modalError = result;
            close();
        }, function (error) {
            _this.modalError = error;
        });
    };
    AppComponent.prototype.logOut = function () {
        _a = [1, []], this.state = _a[0], this.photos = _a[1];
        _b = ['', ''], this.login = _b[0], this.password = _b[1];
        var _a, _b;
    };
    AppComponent.prototype.savePhoto = function (close) {
        var _this = this;
        if (!this.login || !this.password)
            return this.modalError = 'Error: no login or password';
        var photoParams = {
            oldPath: this.onePagePath,
            gender: this.onePageGender,
            age: this.onePageAge
        };
        this.httpService.savePhoto(this.login, this.password, photoParams)
            .subscribe(function (result) {
            if (result !== '1')
                return _this.modalError = result;
            close();
        }, function (error) {
            _this.modalError = error;
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content1'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content2'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content3'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content3", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, ".half {\n  height: 80vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.clickers {\n  transition: 0.4s;\n}\n\n.clickers:hover {\n  background-color: #03422f;\n}\n\n.title {\n  font-size: 30px;\n  letter-spacing: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n\n.outline {\n  width: 10%;\n  height: 1px;\n  background-color: #03bf8d;\n  border-radius: 3px;\n  float: left;\n}\n\n.description {\n  font-size: 14px;\n  letter-spacing: 1px;\n  width: 560px;\n  margin-left: 0;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  line-height: 25px;\n}\n\n.search {\n  width: 100%;\n  background-color: #e8e8e8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 30px 27px;\n  border-radius: 3px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.search input {\n  background-color: white;\n  border: none;\n  padding: 10px;\n  height: 45px;\n  width: 80%;\n  border-radius: 3px 0 0 3px;\n}\n\n.search button{\n  width: 20%;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 0 3px 3px 0;\n  transition: 0.4s;\n  height: 45px;\n}\n.search button:hover{\n  background: #037a5e;\n}\n\n.search-result-container {\n  width: 100%;\n  margin-top: 20px;\n  background-color: #e8e8e8;\n  height: 100%;\n  border-radius: 3px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.wrapper{\n  width: 85%;\n  display: inline-block;\n}\n\n.main{\n  text-align: center;\n}\n\n.left-block{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float:left;\n  width: 65%;\n}\n\n.right-block{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float:right;\n  width: 33%;\n}\n\n.add{\n  margin-top: 20px;\n}\n\n.blocks{\n  background-color: #e8e8e8;\n  width: 100%;\n  text-align: left;\n  padding: 20px 30px 10px 35px;\n  border-radius: 3px;\n}\n\n.blocks:last-child {\n  height: 100%;\n}\n\n.most-popular ul li{\n  list-style-type: decimal;\n\n}\n\n.most-popular ul li span:hover{\n  text-decoration: underline;\n  cursor: pointer;\n\n}\n\n.most-popular ul{\n  padding-left: 21px;\n\n}\n\nh2{\n  font-size: 18px;\n  padding: 5px 5px 5px 0;\n  font-weight: 600;\n}\n\n.add-file input {\n  background-color: white;\n  border: none;\n  padding-left: 10px;\n  margin-top: 20px;\n  height: 45px;\n  width: 80%;\n  border-radius: 3px 0 0 3px;\n}\n\n.add-file button{\n  margin-left: -4px;\n  width: 19%;\n  height: 45px;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 0 3px 3px 0;\n  transition: 0.4s;\n}\n\n.add-file button:hover{\n  background: #037a5e;\n}\n\n.delimiter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.or {\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.delimiter .outline {\n  width: 100%;\n  background-color: black;\n}\n\n.upload-file button{\n  margin-left: 1px;\n  width: 99%;\n  height: 45px;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  transition: 0.4s;\n}\n\n.upload-file button:hover{\n  background: #037a5e;\n}\n\n.incorrect-input-message{\n  color: red;\n  max-height: 7px;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.add-description-btn{\n  background: #02bf8d;\n  color: white;\n}\n\n.key-result-row{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 20px 30px;\n  box-sizing: border-box;\n}\n\n.key-result-container{\n\n  float: left;\n  text-align: left;\n  min-width: 50%;\n  min-height: 30%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-left: 15px;\n}\n\n.value-container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\ninput:hover, input:focus, input:active {\n  outline: 0 !important;\n  /*border: none !important;*/\n}\n\nbutton:hover, button:focus, button:active {\n  outline: 0 !important;\n  /*border: none !important;*/\n}\n\n.content-wrapper{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"header\">\n    <div *ngIf=\"state === 1 || state === 2\" class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openSignIn()\">Sign in</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openSignUp()\">Sign up</button>\n    </div>\n\n    <div *ngIf=\"state === 3\" class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"logOut()\">Log out</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openAddPhoto()\">Add photo</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"state === 1\" class=\"first-state\">\n    <div class=\"half\">\n      <input type=\"file\" (change)=\"fileChangedEvent($event)\" class=\"btn-search\" />\n    </div>\n    <div>{{noPhotoMessage}}</div>\n    <div>\n      <button type=\"button\" class=\"btn add-description-btn col-md-6\" (click)=\"detect()\">Detect</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"state === 2\" class=\"second-state\">\n    <br>\n    <img [src]=\"onePagePath\"/>\n    <br>\n    <table class=\"table text-center\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">gender</th>\n          <th class=\"text-center\">age</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{onePageGender}}</td>\n          <td>{{onePageAge}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"state = 1\">Back to upload</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"openSave()\">Save result</button>\n  </div>\n\n  <div *ngIf=\"state === 3\" class=\"third-state\">\n    <br>\n    <div *ngFor=\"let item of photos\" style=\"display: inline-block; width: 50%\">\n      <img [src]=\"item.path\" height=\"400px\"/>\n      <br>\n      <table class=\"table text-center\">\n        <thead>\n        <tr>\n          <th class=\"text-center\">gender</th>\n          <th class=\"text-center\">age</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>{{item.gender}}</td>\n          <td>{{item.age}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<ng-template class=\"collapse\" #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Save result for user</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>You can add this result to your collection</p>\n    <input class=\"form-control\" [(ngModel)]=\"login\" placeholder=\"Input login\"/>\n    <br>\n    <input class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Input password\"/>\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"savePhoto(c)\">Add</button>\n  </div>\n</ng-template>\n\n<ng-template class=\"collapse\" #content1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Sign up</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Please enter login and password: </p>\n    <input class=\"form-control\" [(ngModel)]=\"login\" placeholder=\"Input login\"/>\n    <br>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Input password\"/>\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"signUp(c)\">Sign in</button>\n  </div>\n</ng-template>\n\n<ng-template class=\"collapse\" #content2 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Sign in</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Please enter login and password: </p>\n    <input class=\"form-control\" [(ngModel)]=\"login\" placeholder=\"Input login\"/>\n    <br>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Input password\"/>\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"signIn(c)\">Sign in</button>\n  </div>\n</ng-template>\n\n<ng-template class=\"collapse\" #content3 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add new photo to collection</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body text-center\">\n    <div *ngIf=\"modalState === 1\" class=\"first-state\">\n      <div class=\"half\">\n        <input type=\"file\" (change)=\"fileChangedEvent($event)\" class=\"btn-search\" />\n      </div>\n      <div>{{noPhotoMessage}}</div>\n      <div>\n        <button type=\"button\" class=\"btn add-description-btn col-md-6\" (click)=\"detect(true)\">Detect</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"modalState === 2\" class=\"second-state\">\n      <br>\n      <img [src]=\"onePagePath\" style=\"max-width: 80%\"/>\n      <br>\n      <table class=\"table text-center\">\n        <thead>\n        <tr>\n          <th class=\"text-center\">gender</th>\n          <th class=\"text-center\">age</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>{{onePageGender}}</td>\n          <td>{{onePageAge}}</td>\n        </tr>\n        </tbody>\n      </table>\n      <br>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalState = 1\">Back to upload</button>\n      <button type=\"button\" class=\"btn add-description-btn\" (click)=\"savePhoto(emptyFunction, mode)\">Save result</button>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })

},[244]);
//# sourceMappingURL=main.bundle.js.map