import { Component, ViewChild } from '@angular/core';
import { HttpService} from './services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uploadHelper: string;
  modalError : string = '';
  state : number = 1;
  modalState : number = 1;
  noPhotoMessage : string = '';

  onePagePath : string = '';
  onePageGender : string = '';
  onePageAge : number = 0;

  @ViewChild('content') content: any;
  @ViewChild('content1') content1: any;
  @ViewChild('content2') content2: any;
  @ViewChild('content3') content3: any;

  filesToUpload: Array<File>;

  login : string = '';
  password : string = '';

  photos : any;

  constructor (
    private httpService: HttpService,
    private modalService: NgbModal
  ) {}

  emptyFunction() { }

  detect(mode) {
    this.noPhotoMessage = '';
    if (!this.filesToUpload || !this.filesToUpload.length)
      return this.noPhotoMessage = 'No photo, please choose photo!';

    this.upload(mode);
  }

  fileChangedEvent(fileInput: any){
    this.filesToUpload = fileInput.target.files;
  }

  upload(mode) {
    this.uploadHelper = 'Загрузка...';
    this.httpService.makeFileRequest(this.filesToUpload).then((result) => {
      const parseResult = JSON.parse(JSON.parse(JSON.stringify(result)));
      this.filesToUpload = [];
      [this.onePagePath, this.onePageAge, this.onePageGender] =
        [parseResult['path'], parseResult['age'], parseResult['gender']];

      if (mode)
        this.modalState = 2;
      else
        this.state = 2;
    }, (error) => {
      this.filesToUpload = [];
      console.error(error);
    });
  }

  openSave() {
    this.modalError = '';
    [this.login, this.password] = ['',''];
    this.modalService.open(this.content, {size: 'lg'})
  }

  openSignUp() {
    this.modalError = '';
    [this.login, this.password] = ['',''];
    this.modalService.open(this.content1, {size: 'lg'})
  }

  openSignIn() {
    this.modalError = '';
    [this.login, this.password] = ['',''];
    this.modalService.open(this.content2, {size: 'lg'})
  }

  openAddPhoto() {
    this.modalError = '';
    this.modalService.open(this.content3, {size: 'lg'})
  }

  signIn(close) {
    if (!this.login || !this.password)
      return this.modalError = 'Error: no login or password';

    this.httpService.signIn(this.login, this.password)
      .subscribe((result) => {
        if (typeof result === 'string')
          return this.modalError = result;

        this.photos = result;
        this.state = 3;
        close();
      }, (error) => {
        this.modalError = error;
      })
  }

  signUp(close) {
    if (!this.login || !this.password)
      return this.modalError = 'Error: no login or password';

    this.httpService.signUp(this.login, this.password)
      .subscribe((result) => {
        if (result !== '1')
          return this.modalError = result;

        close();
      }, (error) => {
        this.modalError = error;
      })
  }

  logOut() {
    [this.state, this.photos] = [1,[]];
    [this.login, this.password] = ['',''];
  }

  savePhoto(close) {
    if (!this.login || !this.password)
      return this.modalError = 'Error: no login or password';

    const photoParams = {
      oldPath: this.onePagePath,
      gender: this.onePageGender,
      age: this.onePageAge
    };

    this.httpService.savePhoto(this.login, this.password, photoParams)
      .subscribe((result) => {
        if (result !== '1')
          return this.modalError = result;

        close();
      }, (error) => {
        this.modalError = error;
      })
  }
}
