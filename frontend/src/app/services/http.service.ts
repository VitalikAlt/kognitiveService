import { Injectable } from '@angular/core';
import  { Headers, Http, Response, RequestOptions } from '@angular/http';

import { SearchResult } from '../search-result';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpService {

  private baseUrl = 'http://localhost:8080/';


  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData (res: Response) {
    let body = res.json();
    return body || { };
  }

  private extractSearchData (res: Response){
    return res.json() as SearchResult[];
  }

  makeFileRequest(files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", this.baseUrl+'upload', true);
      xhr.send(formData);
    });
  }

  getSearchResult(searchParam: string) : Observable<SearchResult[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.baseUrl + 'search';

    return this.http
      .post(url, JSON.stringify({ searchParam }), options)
      .map(this.extractSearchData)
      .catch(this.handleError);
  }

  getTopFive() : Observable<string[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.baseUrl + 'top';

    return this.http
      .get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSearchHelpData(searchParam: string) : Observable<string[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.baseUrl + 'get_keys';

    return this.http
      .post(url, JSON.stringify({searchParam}), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  saveDescription(key: string, value: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let url = this.baseUrl + 'add_word';

    return this.http
      .post(url, JSON.stringify({key, value}), options)
      .map(this.extractData)
      .catch(this.handleError)
  }
}
